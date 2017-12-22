<template>
  <b-row :class="{'ld-loading': loading}">
    <div class="loader">
      <div class="loader-bar"></div>
    </div>
    <b-col lg="12">
      <b-row>
        <b-col md="12">
          <div class="panel">
            <div class="panel-header">&nbsp;</div>
            <div class="panel-body text-center">
              <b-row>
                <!-- Encrypted wallet -->
                <b-col md="8" class="col-md-offset-2 form-horizontal">
                  <b-form @submit.stop.prevent="checkAddress" class="encrypted-wallet">
                    <!-- <div class="row">
                            <b-col sm="8" class="col-sm-offset-2">
                              <b-alert :show="true" variant="danger" class="text-left">Error</b-alert>
                            </b-col>
                          </div> -->
                    <div class="form-group">
                      <label for="" class="control-label col-sm-3">Address</label>
                      <b-col sm="6">
                        <b-form-input v-model="address" :state="isAddress(address)" placeholder="Input a address"></b-form-input>
                      </b-col>
                      <b-col md="2" sm="3">
                        <b-btn class="btn-accent btn-block" @click="checkAddress">Check</b-btn>
                      </b-col>
                    </div>
                  </b-form>
                </b-col>
              </b-row>
            </div>
          </div>
        </b-col>
      </b-row>
    </b-col>
    <!-- Wallet info -->
    <b-col lg="12" v-if="result.address > 0">
      <hr>
      <b-col md="8" sm="10" class="col-sm-offset-1 col-md-offset-2">
        <div class="panel panel-filled">
          <div class="panel-header">&nbsp;</div>
          <div class="panel-body">
            <b-col sm="12">
              <div class="form-horizontal">
                <div class="form-group">
                  <label class="col-sm-3 control-label" for="">Address</label>
                  <b-col sm="9">
                    <b-form-input readonly :value="result.address"></b-form-input>
                  </b-col>
                </div>
                <div class="form-group">
                  <label class="col-sm-3 control-label" for="">Balance</label>
                  <b-col sm="9">
                    <p class="form-control-static">{{result.balance}}</p>
                  </b-col>
                </div>
              </div>
            </b-col>
          </div>
        </div>
      </b-col>
    </b-col>
    <div class="clearfix"></div>
  </b-row>
</template>

<script>
import $ from '../../vendor/jquery/dist/jquery.min'
import { web3, web3Service, web3Utils } from '../../services/web3'
import { utils } from '../../utils/index'

export default {
  props: ['addressParam'],
  data: function() {
    return {
      address: '',
      loading: false,
      result: {}
    }
  },
  mounted: function() {
    if (this.addressParam) {
      this.address = this.addressParam
      this.checkAddress()
    }
  },
  computed: {
    sanitizeAddress: function() {
      return web3Utils.sanitizeHex(this.address)
    },
  },
  methods: {
    checkAddress() {
      this.result = {}
      if (!this.isAddress(this.address)) {
        toastr.error('invalid address')
        return
      }
      this.loading = true
      var balance = web3Service.getBalance(this.sanitizeAddress, (data) => {
        this.result = {
          address: this.sanitizeAddress,
          balance: utils.formatNumber(data, '0') + ' ' + process.env.CURRENCY_UNIT
        }
        this.loading = false
      })
    },
    isAddress(address) {
      return web3Utils.isValidAddress(address)
    }
  }
};
</script>

<style scoped>
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

code {
  word-wrap: break-word;
}

.form-group {
  margin-bottom: 10px;
}
</style>
