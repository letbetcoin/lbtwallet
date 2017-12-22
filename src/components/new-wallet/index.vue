<template>
    <b-row>
        <b-col md="8" class="col-md-offset-2">
            <create-password v-if="!createdPassword" :loading="creatingWallet" @submit="submitForm" ></create-password>
            <save-keystore v-if="createdPassword" :wallet="walletData"></save-keystore>
        </b-col>
    </b-row>
</template>
<script src="./new-wallet.js"></script>

<style>
.panel.disabled {
  position: relative;
  opacity: 0.8;
}
.panel.disabled:after {
  content: "";
  display: block;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 1;
  background: rgba(0, 0, 0, 0.4);
}
</style>
