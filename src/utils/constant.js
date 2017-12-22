
export const WALLET_OPTIONS = {
  privateKey: 'privateKey',
  encrypted: 'encrypted'
}

export const ACCESS_WALLET_OPTIONS = [
  {
    text: 'Use encrypted LBT Wallet',
    value: WALLET_OPTIONS.encrypted
  },
  {
    text: 'Use raw private key',
    value: WALLET_OPTIONS.privateKey
  }
]
