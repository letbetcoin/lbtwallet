<template>
  <b-row :class="{'ld-loading': loading}">
    <div class="loader">
      <div class="loader-bar"></div>
    </div>
    <b-col lg="12">
      <b-row>
        <b-col md="4">
          <b-row>
            <b-col md="10" class="">
              <h4>How to access your wallet?</h4>
              <div class="panel">
                <div class="panel-body">
                  <div class="form-group">
                  </div>
                  <div class="form-group" :key="key" v-for="(option, key) in walletOptions">
                    <div class="radio radio-warning">
                      <input type="radio" :id="option.value" v-model="selectedWallet" name="walletOptions" :value="option.value">
                      <label :for="option.value" :text-content.prop="option.text">
                      </label>
                    </div>
                  </div>
                </div>
              </div>
            </b-col>
          </b-row>
        </b-col>
        <b-col md="8">
          <div class="wallet-options panel panel-filled" v-if="selectedWallet">
            <div class="panel-body text-center">
              <b-row>
                <!-- Encrypted wallet -->
                <div class="col-md-10 col-md-offset-1">
                  <b-form @submit.stop.prevent="submitWithEncryptedFile" class="encrypted-wallet" v-if="selectedWallet === WALLET_OPTIONS.encrypted">
                    <div class="form-group">
                      <label class="btn btn-accent btn-md" for="select-wallet">
                        <input id="select-wallet" @change="readEncryptedWalletFile($event)" type="file" style="display:none;">
                        <span id="upload-file-info2">Select your wallet</span>
                      </label>
                    </div>
                    <div class="form-group">
                      <div class="col-sm-9">
                        <b-form-input v-model="walletEncrypted.password" type="password" :state="walletEncrypted.password.length>0" placeholder="Input password"></b-form-input>
                      </div>
                      <div class="col-sm-3">
                        <b-btn type="submit" class="btn-accent btn-block">Unlock</b-btn>
                      </div>
                    </div>
                  </b-form>
                </div>
                <!-- Encrypted wallet ends -->
                <!-- Private key -->
                <div class="col-md-10 col-md-offset-1">
                  <b-form @submit.stop.prevent="submitWithPrivateKey" v-if="selectedWallet === WALLET_OPTIONS.privateKey">
                    <div class="form-group">
                      <div class="col-sm-9">
                        <!-- <b-form-textarea rows="4" name="password" placeholder="Input your private key"></b-form-textarea> -->
                        <b-form-input :type="ui._privKeyFocus" @blur.native="ui.privKeyFocus('password')" @focus.native="ui.privKeyFocus('text')" v-model="walletPrivateKey" :state="isValidPrivateKey(walletPrivateKey)" placeholder="Input your private key"></b-form-input>
                      </div>
                      <div class="col-sm-3">
                        <b-btn type="submit" class="btn-accent btn-block">Unlock</b-btn>
                      </div>
                    </div>
                  </b-form>
                </div>
                <!-- Private key ends -->
              </b-row>
            </div>
          </div>
        </b-col>
      </b-row>
    </b-col>
    <b-col lg="12" v-if="wallet.address">
      <hr>
      <b-row>
        <b-col md="4" sm="5" class="text-center">
          <div class="panel panel-filled">
            <div class="panel-header">&nbsp;</div>
            <div class="panel-body">
              <div class="form-group">
                <div>
                  <div>Your address:</div>
                  <p>
                    <code>{{wallet.address}}</code>
                  </p>
                </div>
              </div>
              <div class="form-group">
                <div>
                  <div>Your balance: </div>
                  <p class="text-white">{{wallet.balance}}</p>
                </div>
              </div>
              <div class="form-group text-center">
                <div class="qr-code">
                  <qrcode :value="wallet.address" :size="200" />
                  <!-- <img :src="require('../../images/qr-code.png')" alt=""> -->
                </div>
              </div>
            </div>
          </div>
        </b-col>
        <b-col md="7" sm="7">
          <div class="panel">
            <div class="panel-body">
              <b-form class="form-horizontal">
                <div class="form-group">
                  <label class="col-sm-3 control-label" for="">Address</label>
                  <b-col sm="9">
                    <b-form-input v-model="txReq.to" :state="isAddress(txReq.to)" placeholder="Input a Address"></b-form-input>
                  </b-col>
                </div>
                <div class="form-group">
                  <label class="col-sm-3 control-label" for="">Amount</label>
                  <b-col sm="9">
                    <b-row>
                      <b-col md="6" sm="5">
                        <b-input-group>
                          <b-form-input name="" v-model="txReq.amount" :state="isValidAmount(txReq.amount)" placeholder="Input amount"></b-form-input>
                          <b-input-group-addon>
                            {{txReq.currencyUnit}}
                          </b-input-group-addon>
                        </b-input-group>
                      </b-col>
                      <b-col md="6" sm="7">
                        <b-row>
                          <label class="col-sm-6 col-md-4 control-label">Gas</label>
                          <b-col sm="6" md="8">
                            <b-form-input v-model="txReq.gasLimit" :state="txReq.gasLimit>0" placeholder=""></b-form-input>
                          </b-col>
                        </b-row>
                      </b-col>
                    </b-row>
                  </b-col>
                </div>
                <div class="form-group">
                  <label class="control-label col-sm-3">Data</label>
                  <b-col sm="9">
                    <b-form-input v-model="txReq.data" :state="isValidTxData(txReq.data)" placeholder=""></b-form-input>
                  </b-col>
                </div>
                <div class="form-group">
                  <b-col sm="9" class="col-sm-offset-3">
                    <b-btn class="btn-accent btn-block" @click="generateTx">Generate Transaction</b-btn>
                  </b-col>
                </div>
              </b-form>
            </div>
          </div>
          <!-- Check transaction info -->
          <b-row>
            <b-col sm="11" class="col-sm-offset-1">
              <div class="panel panel-filled" v-if="transactionInfo.raw">
                <div class="panel-body">
                  <b-row>
                    <b-col sm="6">
                      <label>Raw transaction</label>
                      <b-form-textarea rows="5" readonly :value="JSON.stringify(transactionInfo.raw)"></b-form-textarea>
                    </b-col>
                    <b-col sm="6">
                      <label>Signed transaction</label>
                      <b-form-textarea rows="5" readonly :value="transactionInfo.signed">
                      </b-form-textarea>
                    </b-col>
                  </b-row>
                </div>
                <div class="panel-footer">
                  <button class="btn btn-accent btn-block" data-toggle="modal" data-target="#confirmSendTransaction">Send transaction</button>
                </div>
              </div>
            </b-col>
          </b-row>
          <!-- Check transaction info ends -->
        </b-col>
      </b-row>
    </b-col>
    <div class="clearfix"></div>
    <!-- Confirm send transaction modal -->
    <div class="modal fade" ref="confirmSendTransaction" v-if="transactionInfo.raw" id="confirmSendTransaction" tabindex="-1" role="dialog" aria-hidden="true">
      <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content">
          <div class="modal-header">
            <h4 class="modal-title text-warning">Warning</h4>
          </div>
          <div class="modal-body">
            <table class="table text-center">
              <tbody>
                <tr>
                  <td>
                    <div class="blockie-address" title="Address Indenticon" :blockie-address="wallet.address"></div>
                    <p>
                      <strong>{{wallet.address}}</strong>
                    </p>
                  </td>
                  <td>
                    <i class="pe pe-7s-angle-right text-large"></i><br>
                    <h4 class="text-warning no-margin">{{txAmount}} {{currentUnit}}</h4>
                  </td>

                  <td>
                    <div class="blockie-address" title="Address Indenticon" :blockie-address="transactionInfo.raw.to"></div>
                    <p>
                      <strong>{{transactionInfo.raw.to}}</strong>
                    </p>
                  </td>
                </tr>
              </tbody>
            </table>
            <hr />
            <div>
              <p>
                You are about to send
                <strong class="text-white">{{txAmount}} {{currentUnit}}</strong><br/> to address
                <strong class="text-white">{{transactionInfo.raw.to}}</strong>
              </p>
              <p>
                You are interacting with the
                <strong class="text-white">{{currentUnit}} chain</strong>, provided by
                <strong class="text-white">{{currentUnit}} Wallet</strong>.
              </p>
              <h4>Are you sure you want to do this?</h4>
            </div>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-default" data-dismiss="modal">No, get me out of here!</button>
            <button type="button" class="btn btn-primary" @click="sendSignedTx">Yes, I'm sure. Make transaction</button>
          </div>
        </div>
      </div>
    </div>
    <!-- Confirm send transaction modal ends -->

    <!-- Alert after send transaction modal -->
    <div class="modal fade" ref="alertSendTransactionState" id="alertSendTransactionState" tabindex="-1" role="dialog" aria-hidden="true">
      <div class="modal-dialog modal-dialog-centered" v-if="transactionInfo.txHash">
        <div class="modal-content">
          <div class="modal-header text-center">
            <h4 class="modal-title text-success">
              <i class="pe pe-7s-check"></i>
              Successful
            </h4>
          </div>
          <div class="modal-body">
            <div>
              <p>
                You TX has been broadcast to the network. It is waiting to be mined &amp; confirmed. During ICOs, it may take 3+ hours to confirm. Use the Verify &amp; Check buttons below to see. TX Hash: <br/>
              </p>
              <p class="text-white">{{transactionInfo.txHash}}</p>
            </div>
          </div>
          <div class="modal-footer">
            <a class="btn btn-info" :href="transactionInfo.checkTxHashUrl" target="_blank">Check TX Status</a>
            <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
          </div>
        </div>
      </div>
    </div>
    <!-- Alert after send transaction modal ends -->
  </b-row>
</template>

<script>
import qrcode from '../common/qrcode'
import $ from "../../vendor/jquery/dist/jquery.min";
import { web3, web3Service, web3Utils } from "../../services/web3";
import {
  utils,
  WALLET_OPTIONS,
  ACCESS_WALLET_OPTIONS
} from "../../utils/index";
import ETx from "ethereumjs-tx";

export default {
  props: ['accessParam', 'txAddressToParam', 'txAmountParam', 'txGasLimitParam', 'txDataParam'],
  components: {
    qrcode
  },
  mounted: function() {
    if (this.accessParam && WALLET_OPTIONS[this.accessParam]) {
      this.selectedWallet = this.accessParam
    }
    this.genNewTxReq()
  },
  data: function() {
    return {
      loading: false,
      ui: {
        _privKeyFocus: 'text',
        privKeyFocus: function(v) {
          this._privKeyFocus = v
        }
      },
      selectedWallet: WALLET_OPTIONS.encrypted,
      walletPrivateKey: "",
      walletEncrypted: {
        data: null,
        password: ""
      },
      wallet: this.genNewWallet(),
      txReq: {},
      transactionInfo: {}
    };
  },
  computed: {
    WALLET_OPTIONS: () => WALLET_OPTIONS,
    walletOptions: () => ACCESS_WALLET_OPTIONS,
    currentUnit: () => process.env.CURRENCY_UNIT,
    txAmount: function() {
      if (this.transactionInfo.raw) {
        return utils.formatNumber(web3Utils.hexToValue(this.transactionInfo.raw.value), "0")
      }
      return "0"
    },
    sanitizeTxReqTo: function() {
      return web3Utils.sanitizeHex(this.txReq.to)
    },
    txReqAmountInHex: function() {
      return web3Utils.valueToHex(this.txReq.amount)
    },
    sanitizeWalletPrivKey: function() {
      return web3Utils.sanitizeHex(this.walletPrivateKey)
    },
    sanitizeTxReqData: function() {
      return this.txReq.data ? web3Utils.sanitizeHex(this.txReq.data) : ""
    }
  },
  watch: {
    selectedWallet: function(v) {
      this.wallet = this.genNewWallet();
      this.genNewTxReq();
    },
    "txReq.amount": function(v) {
      console.log('watch txReq.amount')
      this.updateGasLimit();
    },
    "txReq.data": function(v) {
      console.log('watch txReq.data')
      this.updateGasLimit();
    }
  },
  methods: {
    genNewWallet() {
      return {};
    },
    genNewTxReq() {
      var obj = {
        gasLimit: 21000,
        currencyUnit: process.env.CURRENCY_UNIT
      }
      if (this.txAddressToParam) {
        obj.to = this.txAddressToParam
      }
      var updateGas = false
      if (this.txAmountParam) {
        obj.amount = this.txAmountParam
        updateGas = true
      }
      if (this.txDataParam) {
        obj.data = this.txDataParam
        updateGas = true
      }
      if (this.txGasLimitParam) {
        obj.gasLimit = this.txGasLimitParam
        updateGas = false
      }
      this.txReq = obj
      if (updateGas) {
        this.updateGasLimit();
      }
    },
    updateGasLimit() {
      if (!this.isValidTxData(this.txReq.data)) {
        return;
      }
      if (!this.isValidAmount(this.txReq.amount)) {
        return;
      }
      var that = this
      try {
        web3Service.getEstimateGas(
          {
            fromAddress: that.address,
            toAddress: that.sanitizeTxReqTo,
            amount: that.txReqAmountInHex,
            data: that.sanitizeTxReqData
          },
          function(data) {
            // if (!that.txReq.gasLimit || that.txReq.gasLimit < data) {
            //   that.txReq.gasLimit = data;
            // }
            that.txReq.gasLimit = data;
          }
        );
      } catch (e) {
        toastr.error(e.message)
      }
    },
    updateLoading(value) {
      return new Promise(() => {
        this.loading = value;
      });
    },
    submitWithPrivateKey() {
      this.wallet = this.genNewWallet()
      this.transactionInfo = {}

      var isValidPrivKey = this.isValidPrivateKey(this.walletPrivateKey)
      if (isValidPrivKey == null) {
        toastr.error("Private key is empty");
        return;
      } else if (!isValidPrivKey) {
        toastr.error("Invalid private key");
        return;
      }
      this.updateLoading(true);
      var that = this;
      try {
        var acc = web3Service.getAccountByPrivateKey(that.sanitizeWalletPrivKey);
        var balance = web3Service.getBalance(acc.address, data => {
          that.wallet.balance = utils.formatNumber(data, "0") + " " + process.env.CURRENCY_UNIT;
          that.updateLoading(false);
          that.wallet = Object.assign(this.wallet, acc);
          that.checkAndGenTx()
        })
      } catch (e) {
        console.log(e)
        toastr.error(e.message);
        this.updateLoading(false);
      }
    },
    submitWithEncryptedFile() {
      this.wallet = this.genNewWallet()
      this.transactionInfo = {}

      if (this.walletEncrypted.password.length == 0) {
        toastr.error("Password wallet is empty");
        return;
      }
      if (this.walletEncrypted.data == null) {
        toastr.error("Please select wallet encrypted file");
        return;
      }
      this.updateLoading(true);
      var that = this;
      try {
        var acc = web3Service.descryptFromKeystore(
          this.walletEncrypted.data,
          this.walletEncrypted.password
        );
        web3Service.getBalance(acc.address, data => {
          that.wallet.balance = utils.formatNumber(data, "0") + " " + process.env.CURRENCY_UNIT;
          that.updateLoading(false);
          that.wallet = Object.assign(this.wallet, acc);
          that.checkAndGenTx()
        });
      } catch (e) {
        toastr.error(e.message);
        this.updateLoading(false);
      }
    },
    parseWallet(walletData, file) {
      this.walletEncrypted.data = null;

      var walletDataParsed = web3Service.parseWallet(walletData);
      this.loading = false;
      if (walletDataParsed.length > 1) {
        toastr.error(walletDataParsed[1]);
        $("#upload-file-info2").html("Select your wallet");
        return;
      }
      this.walletEncrypted.data = walletDataParsed[0];
      $("#upload-file-info2").html(file.name);
    },
    readEncryptedWalletFile(e) {
      this.loading = true;

      var that = this;
      var file = e.target.files[0];
      var reader = new FileReader();
      reader.onload = function(onLoadEvent) {
        that.parseWallet(onLoadEvent.target.result, file);
      };
      reader.readAsText(file);
    },
    isValidPrivateKey(key) {
      // if (!key || key.length == 0) return null
      return web3Utils.isValidPrivateKey(key);
    },
    isAddress(address) {
      return web3Utils.isValidAddress(address);
    },
    isValidTxData(data) {
      return !data || data.length == 0 || web3Utils.isValidHex(data);
    },
    isValidAmount(amount) {
      return amount > 0;
    },
    checkAndGenTx() {
      if (this.wallet.address && this.verifyGenerateTx() == null) {
        var resp = this.generateTx()
        if (resp != null && typeof (resp) == 'object' && typeof (resp.then) == 'function') {
          resp.then(() => {
            $(this.$refs.confirmSendTransaction).modal('show')
          })
        }
      }
    },
    verifyGenerateTx() {
      if (!this.isAddress(this.txReq.to)) {
        return "Invalid Tx To address"
      }
      if (!this.isValidTxData(this.txReq.data)) {
        return "Invalid Tx data"
      }
      if (!this.isValidAmount(this.txReq.amount)) {
        return "Invalid Tx amount"
      }
      return null
    },
    generateTx() {
      var verify = this.verifyGenerateTx()
      if (verify != null) {
        toastr.error(verify)
        return
      }
      this.loading = true;
      var _privatekey = web3Utils.hexToBuffer(this.wallet.privateKey);
      var that = this;
      try {
        return Promise.all([
          web3Service.getTransactionCount(that.wallet.address),
          web3Service.getGasPrice()
        ]).then(values => {
          var _gasLimit = web3Utils.toHex(that.txReq.gasLimit);
          var _nonce = web3Utils.toHex(values[0]);
          var _gasPrice = web3Utils.toHex(values[1]);

          var txObj = {
            nonce: _nonce,
            gasPrice: _gasPrice,
            gasLimit: _gasLimit,
            to: that.sanitizeTxReqTo,
            value: that.txReqAmountInHex,
            data: that.sanitizeTxReqData
          };
          var tx = new ETx(txObj);
          tx.sign(_privatekey);
          var serializedTx = tx.serialize();
          var txSignedHash = '0x' + serializedTx.toString("hex")
          this.transactionInfo = {
            raw: txObj,
            signed: txSignedHash
          }
          that.loading = false;
        });
      } catch (e) {
        toastr.error(e.message)
        return null
      }
    },
    sendSignedTx() {
      this.loading = true
      var that = this
      $(this.$refs.confirmSendTransaction).modal("hide")
      web3Service.sendSignedTransaction(this.transactionInfo.signed, function(data) {
        that.transactionInfo = Object.assign(that.transactionInfo, {
          txHash: data,
          checkTxHashUrl: '/#/check-transaction?txHash=' + data
        })
        that.loading = false
        $(that.$refs.alertSendTransactionState).modal('show')
      }, function(error) {
        toastr.error(error.message)
        that.loading = false
      })
    }
  }
};
</script>


<style>
input[type="radio"],
input[type="checkbox"] {
  margin-top: 0;
  margin-right: 8px;
}
</style>

<style scoped>
.wallet-options {
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);
}

@media screen and (min-width: 992px) {
  .wallet-options {
    margin-top: 50px;
  }
}

.wallet-options .panel-body {
  padding-top: 20px;
  padding-bottom: 20px;
}

.wallet-options .form-group {
  margin-bottom: 0;
}

.wallet-options .form-group+.form-group {
  margin-top: 15px;
}

code {
  word-wrap: break-word;
}

.input-group {
  width: 100%;
}

.text-white {
  color: #fff;
}

legend {
  color: inherit;
}

.input-group-addon {
  color: inherit;
}

.qr-code {
  display: inline-block;
  vertical-align: middle;
  max-width: 200px;
  min-width: 100px;
}

.qr-code img {
  background: #fff;
  max-width: 100%;
  height: auto;
}

.alert {
  margin-top: 10px;
}

.modal table td {
  border: none;
  white-space: normal;
  word-wrap: break-word;
}

.pe.text-large {
  font-size: 3em;
  line-height: 20px;
}

.blockie-address {
  width: 50px;
  height: 50px;
  display: inline-block;
  margin: auto;
  background-color: #ccc;
  border-radius: 50%;
  overflow: hidden;
  margin-bottom: 10px;
}

h4.no-margin {
  margin: 0;
}

@media screen and (max-width: 467px) {
  .modal .table,
  .modal .table tbody,
  .modal .table tr,
  .modal .table td {
    display: block
  }
  .modal .table td {
    max-width: 100%;
    width: 100%;
  }
}
</style>