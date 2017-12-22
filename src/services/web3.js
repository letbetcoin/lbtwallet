import Web3 from 'web3'
import {
  utils
} from '../utils/index'

export const web3 = new Web3(process.env.ETHEREUM_PROVIDER)

export const TX_STATUS = {
  NOT_FOUND: 'not_found',
  PENDING: 'pending',
  MINED: 'mined'
}

export const web3Service = {
  createAccount: function (password) {
    var createdAcc = web3.eth.accounts.create()
    return {
      'address': createdAcc.address,
      'privateKey': createdAcc.privateKey,
      'privateKeyEncrypted': createdAcc.encrypt(password)
    }
  },
  getBalance: function (address, callback) {
    return web3.eth.getBalance(address, 'pending').then(data => {
      var _data = web3.utils.fromWei(data)
      if (typeof (callback) === 'function') {
        callback(_data)
      }
      return _data
    })
  },
  getTransactionInfo: function (txHash, callback) {
    return web3.eth.getTransaction(txHash).then(data => {
      if (typeof (callback) === 'function') {
        callback(data)
      }
      return data
    })
  },
  getAccountByPrivateKey: function (privKey) {
    return web3.eth.accounts.privateKeyToAccount(privKey)
  },
  getTransactionByHash: function (txHash, callback) {
    return web3.eth.getTransaction(txHash).then((data) => {
      var txData = {
        status: TX_STATUS.NOT_FOUND
      }
      if (!utils.isNullOrUndefined(data)) {
        txData = {
          status: data.blockNumber ? TX_STATUS.MINED : TX_STATUS.PENDING,
          hash: data.hash,
          from: data.from,
          to: data.to,
          amount: web3.utils.fromWei(data.value),
          nonce: data.nonce,
          gasLimit: data.gas,
          gasPrice: data.gasPrice,
          data: data.input == '0x' ? '' : data.input
        }
      }
      if (typeof (callback) === 'function') {
        callback(txData)
      }
      return txData
    })
  },
  parseWallet: function (data) {
    var json = null
    try {
      json = JSON.parse(data.toLowerCase())
    } catch (e) {
      return [null, 'This is not a valid wallet file']
    }
    if (json.Crypto && null && json.crypto != null) {
      return [null, 'This is not a valid wallet content file']
    }
    return [json]
  },
  descryptFromKeystore: function (keystoreJson, password) {
    return web3.eth.accounts.decrypt(keystoreJson, password, true)
  },
  getEstimateGas: function (data, callback) {
    web3.eth.estimateGas({
      from: data.fromAddress,
      to: data.toAddress,
      value: data.amount,
      data: data.data
    }).then(resp => {
      if (typeof (callback) === 'function') {
        callback(resp)
      }
      return resp
    })
  },
  getTransactionCount: function (address, defaultBlock = 'pending') {
    return web3.eth.getTransactionCount(address, defaultBlock)
  },
  getGasPrice: function () {
    return web3.eth.getGasPrice()
  },
  sendSignedTransaction: function (txHash, callback, errCallback) {
    web3.eth.sendSignedTransaction(txHash)
      // .on('receipt', data => console.log('receipt', data))
      .on('transactionHash', data => callback(data))
      // .on('confirmation', data => console.log('confirmation', data))
      .on('error', data => errCallback(data))
  }
}

export const web3Utils = {
  toHex: function (v) {
    return web3.utils.toHex(v)
  },
  hexToBuffer: function (v) {
    return Buffer.from(web3.utils.hexToBytes(v))
  },
  weiToGWei: function (value) {
    return web3.utils.fromWei(value, 'gwei')
  },
  isValidAddress: function (address) {
    if (address && address == '0x0000000000000000000000000000000000000000') return false
    return web3.utils.isAddress(address)
    // if (address.substring(0, 2) != '0x') return false
    // else if (!/^(0x)?[0-9a-f]{40}$/i.test(address)) return false
    // else if (/^(0x)?[0-9a-f]{40}$/.test(address) || /^(0x)?[0-9A-F]{40}$/.test(address)) return true
    // else return address == web3.utils.toChecksumAddress(address)
  },
  isValidPrivateKey: function (pKey) {
    var privkeyLen = pKey.length
    return privkeyLen == 64 || privkeyLen == 66 || privkeyLen == 128 || privkeyLen == 132
  },
  isValidHex: function (data) {
    return web3.utils.isHex(data)
  },
  isValidTxHash: function (txHash) {
    return txHash.substring(0, 2) == '0x' && txHash.length == 66 && web3.utils.isHex(txHash)
  },
  valueToHex: function (v) {
    return this.toHex(web3.utils.toWei(v))
  },
  hexToValue: function (v) {
    return web3.utils.fromWei(v)
  },
  sanitizeHex: function (hex) {
    hex = hex.substring(0, 2) == '0x' ? hex.substring(2) : hex
    if (hex == '') return ''
    return '0x' + this.padLeftEven(hex)
  },
  padLeftEven: function (hex) {
    hex = hex.length % 2 != 0 ? '0' + hex : hex
    return hex
  }
}
