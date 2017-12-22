<template>
  <div class="panel panel-filled" :class="{disabled}">
    <div class="panel-body">
      <div class="text-center">
        <b-row>
          <b-col md="10" class="col-md-offset-1">
            <div class="col-xs-12">
              <div class="form-group">
                <p class="h4">
                  <i class="pe pe-7s-check text-success"></i>
                  <span>Successful</span>
                </p>
              </div>
              <div class="form-group download-encrypted">
                <button class="btn btn-lg btn-w-md btn-success" @click="saveEncryptedWallet">
                  <span class="text-white">Save Encrypted Wallet</span>
                </button>
              </div>
              <div class="form-group text-left">
                <label>Your address</label>
                <b-input-group style="width: 100%">
                  <b-form-input :value="wallet.address" class="form-control form-control-static" readonly></b-form-input>
                  <b-input-group-addon v-clipboard:copy="wallet.address" v-clipboard:success="clipboardCopied" data-toggle="tooltip" data-placement="bottom" title="Click to copy">
                    <i class="pe pe-7s-copy-file"></i>
                  </b-input-group-addon>
                </b-input-group>
              </div>
              <div class="form-group text-left">
                <label>Your private key</label>
                <b-input-group style="width: 100%">
                  <div class="por">
                    <b-form-input :type="showPrivateKey?'text':'password'" :value="wallet.privateKey" class="form-control form-control-static has-toggle-value-input" readonly placeholder="Your private key"></b-form-input>
                    <span class="toggle-value" @click="showPrivateKey=!showPrivateKey">
                      <i class="fa fa-eye" :class="{'fa-eye': !showPrivateKey, 'fa-eye-slash': showPrivateKey}"></i>
                    </span>
                  </div>
                  <b-input-group-addon v-clipboard:copy="wallet.privateKey" v-clipboard:success="clipboardCopied" data-toggle="tooltip" data-placement="bottom" title="Click to copy">
                    <i class="pe pe-7s-copy-file"></i>
                  </b-input-group-addon>
                </b-input-group>
              </div>
            </div>
          </b-col>
        </b-row>
        <b-row>
          <b-col md="10" class="col-md-offset-1">
            <div class="description-text panel panel-filled panel-c-warning text-left">
              <div class="panel-body">
                <p>
                  <span class="text-white">Do not lose it!</span> It cannot be recovered if you lose it.</p>
                <p>
                  <span class="text-white">Do not share it!</span> Your funds will be stolen if you use this file on a malicious/phishing site.</p>
                <p style="margin-bottom: 0">
                  <span class="text-white">Make a backup!</span> Secure it like the millions of dollars it may one day be worth.</p>
              </div>
            </div>
          </b-col>
        </b-row>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: [
    'disabled',
    'wallet'
  ],
  data: () => ({
    showPrivateKey: false
  }),
  computed: {

  },
  methods: {
    togglePublicKey() { },
    togglePrivateKey() { },
    saveEncryptedWallet() {
      var d = JSON.stringify(this.wallet.privateKeyEncrypted)
      var blob = new Blob([d], { type: 'text/json;charset=UTF-8' });

      var link = document.createElement('a');
      link.href = window.URL.createObjectURL(blob);
      link.download = "encrypted_key.json";
      link.click();
    },
    clipboardCopied(el) {
      $(el.trigger).attr('title', 'Copied').tooltip('fixTitle').tooltip('show')
        .attr('title', 'Click to copy').tooltip('fixTitle')
    }
  },
  mounted: function() {
    $('[data-toggle="tooltip"]').tooltip()
  }
}
</script>

<style scoped>
.form-control-static {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.form-new-wallet {
  margin-bottom: 40px;
}

.form-group {
  margin-top: 15px;
  margin-bottom: 15px;
}

.input-group-addon+.input-group-addon {
  border-left: solid 1px #2c2e34;
}

.input-group-addon {
  color: #fff;
  background: #52555f;
  border: none;
  cursor: pointer;
}

.input-group-addon .pe {
  font-size: 1.1em;
}

.description-text {
  font-size: 1.1em;
  line-height: 1.4em;
  font-weight: normal;
}

ul {
  padding-left: 20px;
  padding-top: 3px;
}

ul li {
  padding: 7px 0;
}

.h4 {
  font-size: 2em;
  margin-top: 10px;
  margin-bottom: 20px;
}

.text-white {
  color: #fff;
}

.toggle-value {
  position: absolute;
  right: 0;
  display: block;
  height: 100%;
  min-width: 35px;
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

.por {
  position: relative;
  overflow: hidden;
}

.download-encrypted {
  margin-bottom: 30px;
}

.panel {
  margin-top: 30px;
}
</style>
