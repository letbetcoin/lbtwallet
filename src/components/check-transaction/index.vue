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
                  <b-form @submit.stop.prevent="checkTransaction" class="encrypted-wallet">
                    <!-- <div class="row">
                          <b-col sm="8" class="col-sm-offset-2">
                            <b-alert :show="true" variant="danger" class="text-left">Error</b-alert>
                          </b-col>
                        </div> -->
                    <div class="form-group">
                      <label for="" class="control-label col-sm-3">Tx Hash</label>
                      <b-col sm="6">
                        <b-form-input :state="isValidTxHash(txHash)" v-model="txHash" placeholder=""></b-form-input>
                      </b-col>
                      <b-col md="2" sm="3">
                        <b-btn class="btn-accent btn-block" @click="checkTransaction()">Check</b-btn>
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
    <!-- Transaction info -->
    <b-col lg="12" v-if="showTxInfo && txInfo.status==TxStatus.NOT_FOUND">
      <hr>
      <b-row>
        <b-col sm="10" class="col-sm-offset-1">
          <div class="panel">
            <div class="panel-body">
              <b-row class="form-group">
                <b-col lg="12">
                  <h4>Transaction Not Found</h4>
                </b-col>
              </b-row>
            </div>
          </div>
        </b-col>
      </b-row>
    </b-col>
    <b-col lg="12" v-if="showTxInfo && txInfo.status != TxStatus.NOT_FOUND">
      <hr>
      <b-row>
        <b-col sm="10" class="col-sm-offset-1">
          <div class="panel">
            <div class="panel-body">
              <b-row class="form-group">
                <b-col lg="12">
                  <h4>Transaction Found</h4>
                </b-col>
              </b-row>
              <b-row class="form-group">
                <b-col sm="3" md="2">
                  Tx Hash
                </b-col>
                <b-col sm="9" md="10">
                  <span class="text-white">{{txInfo.hash}}</span>
                </b-col>
              </b-row>
              <b-row class="form-group">
                <b-col sm="3" md="2">
                  Tx Status
                </b-col>
                <b-col sm="9" md="10">
                  <span class="text-white">{{txInfo.status}}</span>
                </b-col>
              </b-row>
              <b-row class="form-group">
                <b-col sm="3" md="2">
                  From Address
                </b-col>
                <b-col sm="9" md="10">
                  <span class="text-white">{{txInfo.from}}</span>
                </b-col>
              </b-row>
              <b-row class="form-group">
                <b-col sm="3" md="2">
                  To Address
                </b-col>
                <b-col sm="9" md="10">
                  <span class="text-white">{{txInfo.to}}</span>
                </b-col>
              </b-row>
              <b-row class="form-group">
                <b-col sm="3" md="2">
                  Amount
                </b-col>
                <b-col sm="9" md="10">
                  <span class="text-white">{{txInfo.amount}}</span>
                </b-col>
              </b-row>
              <b-row class="form-group">
                <b-col sm="3" md="2">
                  Nonce
                </b-col>
                <b-col sm="9" md="10">
                  <span class="text-white">{{txInfo.nonce}}</span>
                </b-col>
              </b-row>
              <b-row class="form-group">
                <b-col sm="3" md="2">
                  Gas Limit
                </b-col>
                <b-col sm="9" md="10">
                  <span class="text-white">{{txInfo.gasLimitFormated}}</span>
                </b-col>
              </b-row>
              <b-row class="form-group">
                <b-col sm="3" md="2">
                  Gas Price
                </b-col>
                <b-col sm="9" md="10">
                  <span class="text-white">{{txInfo.gasPriceFormated}}</span>
                </b-col>
              </b-row>
              <b-row class="form-group">
                <b-col sm="3" md="2">
                  Data
                </b-col>
                <b-col sm="9" md="10">
                  <span class="text-white">{{txInfo.data}}</span>
                </b-col>
              </b-row>
            </div>
          </div>
        </b-col>
      </b-row>
    </b-col>
    <div class="clearfix"></div>
  </b-row>
</template>

<script>
import $ from '../../vendor/jquery/dist/jquery.min'
import { web3, web3Service, TX_STATUS, web3Utils } from '../../services/web3'
import { utils } from '../../utils/index'

export default {
  props: ['txHashParam'],
  data: () => {
    return {
      loading: false,
      showTxInfo: false,
      txHash: '',
      txInfo: {}
    }
  },
  computed: {
    TxStatus: function() {
      return TX_STATUS
    }
  },
  mounted: function() {
    if (this.txHashParam){
        this.txHash = this.txHashParam
        this.checkTransaction()
    }
  },
  methods: {
    checkTransaction() {
      this.showTxInfo = false
      this.txInfo = {}
      if (!this.isValidTxHash(this.txHash)) {
        toastr.error('Invalid transaction hash')
        return
      }
      this.loading=true
      try {
        web3Service.getTransactionByHash(this.txHash, (data) => {
          this.txInfo = Object.assign({}, data)
          if (this.txInfo.status != TX_STATUS.NOT_FOUND) {
            this.txInfo = Object.assign(this.txInfo, {
              status: utils.capitalizeString(data.status, '_'),
              amount: utils.formatNumber(data.amount) + ' ' + process.env.CURRENCY_UNIT,
              gasPriceFormated: utils.formatNumber(data.gasPrice) + ' WEI ( ' + utils.formatNumber(web3Utils.weiToGWei(data.gasPrice)) + ' GWEI )',
              gasLimitFormated: utils.formatNumber(data.gasLimit)
            })
          }
          this.showTxInfo = true
          this.loading=false
        })
      } catch (e) {
        toastr.error(e.message)
      }
    },
    isValidTxHash(txHash) {
      return web3Utils.isValidTxHash(txHash)
    }
  }
}
</script>

<style scoped>
.input-group {
  width: 100%;
}

.text-white {
  color: #fff;
}

.input-group-addon {
  color: inherit
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
</style>
