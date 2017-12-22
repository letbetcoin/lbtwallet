<template>
    <div class="panel panel-filled" :class="{'ld-loading': loading}">
        <div class="loader">
            <div class="loader-bar"></div>
        </div>
        <div class="panel-body">
            <b-row>
                <b-col md="10" class="col-md-offset-1">
                    <form @submit.stop.prevent="submitFn" class="form-new-wallet">
                        <div class="form-group">
                            <p class="text-white" style="font-size: 1.7em">Enter wallet password</p>
                        </div>
                        <div class="form-group">
                            <div class="row">
                                <div class="col-sm-10 col-sm-offset-1">
                                    <b-form-input type="password" class="form-control input-lg" :state="isStrongPass(walletPassword)" v-model="walletPassword" id="exampleInputName" placeholder="Do NOT forget to save this!!!" />
                                </div>
                            </div>
                        </div>
                        <div class="form-group">
                            <div class="description-text text-center">
                                <div class="panel-body">
                                    <p>
                                        This password is used to encrypt your private key. Please choose a password as strong as possible. You will need it to unlock your wallet.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div class="form-group">
                            <button type="submit" class="btn btn-lg btn-w-md btn-accent btn-rounded">Create New Wallet</button>
                        </div>
                    </form>
                </b-col>
            </b-row>
        </div>
    </div>
</template>

<script>
import { web3Service, web3Utils } from '../../../services/web3'

export default {
    props: ['submit', 'disabled', 'loading'],
    data: () => {
        return {
            walletPassword: ''
        }
    },
    methods: {
        submitFn(e) {
            var isStrong = this.isStrongPass(this.walletPassword)
            if (isStrong == null) {
                toastr.error('password is empty')
                return
            } else if (!isStrong) {
                toastr.error('Your password must be at least 8 characters. Please ensure it is a strong password.')
                return
            }
            var acc = web3Service.createAccount(this.walletPassword)
            this.$emit('submit', acc)
        },
        isStrongPass(pass) {
            // if (!pass || pass.length == 0) {
            //     return null
            // }
            return pass.length >= 8
        }
    }
}
</script>


<style scoped>
.panel {
    margin-top: 30px;
}

.form-new-wallet {
    margin: 20px 0 40px;
    text-align: center;
}

.form-new-wallet button[type="submit"] {
    padding-left: 30px;
    padding-right: 30px;
}

.form-group {
    margin-top: 25px;
    margin-bottom: 25px;
}

.description-text {
    font-size: 1.1em;
    line-height: 1.7em;
    font-weight: normal;
}

ul {
    padding-left: 20px;
    padding-top: 3px;
}

ul li {
    padding: 7px 0;
}

.text-white {
    color: #fff;
}
</style>
