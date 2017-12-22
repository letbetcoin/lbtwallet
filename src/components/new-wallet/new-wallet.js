import createPassword from './create-password'
import saveKeystore from './save-keystore'

export default {
  name: 'new-wallet',
  components: {
    saveKeystore,
    createPassword
  },
  data: function () {
    return {
      createdPassword: false,
      savedKeyStore: false,
      creatingWallet: false,
      walletData: {}
    }
  },
  computed: {},
  methods: {
    submitForm (data) {
      // this.$loader.start()
      this.creatingWallet = true
      this.walletData = data
      setTimeout(() => {
        this.createdPassword = true
        this.creatingWallet = false
        // this.$loader.end()
      }, 100)
    }
  }
}
