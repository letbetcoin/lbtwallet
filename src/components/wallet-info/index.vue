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
    <!-- Wallet info -->
    <b-col lg="12" v-if="wallet.address">
      <hr>
      <b-row>
        <b-col sm="8">
          <div class="panel">
            <div class="panel-body">
              <b-form class="form-horizontal">
                <div class="form-group">
                  <label class="col-sm-3 control-label" for="">Your Address</label>
                  <b-col sm="9">
                    <b-form-input readonly :value="wallet.address"></b-form-input>
                  </b-col>
                </div>
                <div class="form-group">
                  <label class="col-sm-3 control-label" for="">Your Private Key</label>
                  <b-col sm="9">
                    <b-form-input :type="showWalletPrivKey ? 'text' : 'password'" class="has-toggle-value-input" readonly :value="wallet.privateKey"></b-form-input>
                    <span class="toggle-value" @click="showWalletPrivKey=!showWalletPrivKey">
                      <i class="fa fa-eye" :class="{'fa-eye': !showWalletPrivKey, 'fa-eye-slash': showWalletPrivKey}"></i>
                    </span>
                  </b-col>
                </div>
                <div class="form-group">
                  <label class="col-sm-3 control-label" for="">Your Balance</label>
                  <b-col sm="9">
                    <b-form-input readonly :value="wallet.balance"></b-form-input>
                  </b-col>
                </div>
              </b-form>
            </div>
          </div>
        </b-col>
        <b-col sm="4">
          <div class="qr-code-container">
            <div class="qr-code">
              <qrcode :value="wallet.address" :size="200" />
            </div>
          </div>
        </b-col>
      </b-row>
    </b-col>
    <div class="clearfix"></div>
  </b-row>
</template>

<script>
import qrcode from '../common/qrcode'
import $ from '../../vendor/jquery/dist/jquery.min'
import { web3, web3Service, web3Utils } from '../../services/web3'
import { utils, WALLET_OPTIONS, ACCESS_WALLET_OPTIONS } from '../../utils/index'

export default {
  props: ['accessParam'],
  components: {
    qrcode
  },
  mounted: function() {
    if (this.accessParam && WALLET_OPTIONS[this.accessParam]) {
      this.selectedWallet = this.accessParam
    }
  },
  data: () => {
    return {
      loading: false,
      selectedWallet: WALLET_OPTIONS.encrypted,
      showWalletPrivKey: false,
      walletPrivateKey: '',
      walletEncrypted: {
        data: null,
        password: ''
      },
      wallet: {},
      ui: {
        _privKeyFocus: 'text',
        privKeyFocus: function(v) {
          this._privKeyFocus = v
        }
      }
    }
  },
  computed: {
    WALLET_OPTIONS: () => WALLET_OPTIONS,
    walletOptions: () => ACCESS_WALLET_OPTIONS,
    sanitizeWalletPrivKey: function() {
      return web3Utils.sanitizeHex(this.walletPrivateKey)
    },
  },
  watch: {
    selectedWallet: function(val) {
      this.wallet = {}
    }
  },
  methods: {
    updateLoading(value) {
      return new Promise(() => {
        this.loading = value
      })
    },
    submitWithPrivateKey() {
      this.wallet = {}
      var isValidPrivKey = this.isValidPrivateKey(this.walletPrivateKey)
      if (isValidPrivKey == null) {
        toastr.error('Private key is empty')
        return
      } else if (!isValidPrivKey) {
        toastr.error('Invalid private key')
        return
      }
      this.updateLoading(true)
      var that = this
      try {
        var acc = web3Service.getAccountByPrivateKey(this.sanitizeWalletPrivKey)
        var balance = web3Service.getBalance(acc.address, (data) => {
          that.wallet.balance = utils.formatNumber(data, '0') + ' ' + process.env.CURRENCY_UNIT
          that.updateLoading(false)
          this.wallet = Object.assign(this.wallet, acc)
        })
      } catch (e) {
        console.log(e)
        toastr.error(e.message)
        this.updateLoading(false)
      }
    },
    submitWithEncryptedFile() {
      this.wallet = {}
      if (this.walletEncrypted.password.length == 0) {
        toastr.error('Password wallet is empty')
        return
      }
      if (this.walletEncrypted.data == null) {
        toastr.error('Wallet encrypted file is empty')
        return
      }
      this.updateLoading(true)
      var that = this
      try {
        var acc = web3Service.descryptFromKeystore(this.walletEncrypted.data, this.walletEncrypted.password)
        var balance = web3Service.getBalance(acc.address, (data) => {
          that.wallet.balance = utils.formatNumber(data, '0') + ' ' + process.env.CURRENCY_UNIT
          that.updateLoading(false)
          this.wallet = Object.assign(this.wallet, acc)
        })
      } catch (e) {
        toastr.error(e.message)
        this.updateLoading(false)
      }
    },
    parseWallet(walletData, file) {
      this.walletEncrypted.data = null

      var walletDataParsed = web3Service.parseWallet(walletData)
      this.loading = false
      if (walletDataParsed.length > 1) {
        toastr.error(walletDataParsed[1])
        $('#upload-file-info2').html("Select your wallet")
        return
      }
      this.walletEncrypted.data = walletDataParsed[0]
      $('#upload-file-info2').html(file.name)
    },
    readEncryptedWalletFile: function(e) {
      if (e.target.files.length == 0) {
        return
      }
      this.loading = true

      var that = this
      var file = e.target.files[0]
      var reader = new FileReader()
      reader.onload = function(onLoadEvent) {
        that.parseWallet(onLoadEvent.target.result, file)
      }
      reader.readAsText(file)
    },
    isValidPrivateKey: function(key) {
      // if (!key || key.length == 0) return null
      return web3Utils.isValidPrivateKey(key)
    }
  }
}
</script>

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

.input-group {
  width: 100%;
}

.text-white {
  color: #fff;
}

.input-group-addon {
  color: inherit;
}

.qr-code-container {
  display: flex;
  justify-content: center;
}

.qr-code {
  max-width: 200px;
  min-width: 100px;
}

.qr-code img {
  background: #fff;
  max-width: 100%;
  height: auto;
}

.toggle-value {
  position: absolute;
  right: 10px;
  top: 0;
  display: block;
  height: 100%;
  min-height: 30px;
  min-width: 30px;
  text-align: center;
  background: transparent;
  line-height: 35px;
  color: #fff;
  z-index: 9;
  font-size: 1.3em;
}

.toggle-value .pe {
  color: inherit;
}

.has-toggle-value-input {
  padding-right: 30px;
}

.alert {
  margin-top: 10px;
}
</style>
