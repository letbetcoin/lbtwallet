<template>
  <div id="app" class="">
    <router-view class="wrapper"></router-view>
  </div>
</template>
<script>
const app = {
  name: 'app'
}

export default app
</script>
<style src="../vendor/fontawesome/css/font-awesome.css"></style>
<style src="../vendor/animate.css/animate.css"></style>
<style src="../vendor/bootstrap/css/bootstrap.css"></style>
<style src="../vendor/toastr/toastr.min.css"></style>

<style src="../styles/pe-icons/pe-icon-7-stroke.css"></style>
<style src="../styles/pe-icons/helper.css"></style>
<style src="../styles/stroke-icons/style.css"></style>
<style src="../styles/style.css"></style>

<style>
.profil-link img {
  width: 40px;
  display: inline-block;
  background: #ccc;
}
@media screen and (min-width: 768px){
  body, html {
    height: 100%;
  }
  #app {
    min-height: 100%;
    position: relative;
    padding-bottom: 80px;
  } 
  #toast-container.toast-bottom-center {
    bottom: 90px;
  }
}
#toast-container.toast-bottom-center .toast {
  width: 100%;
  border-radius: 0;
}
.modal .modal-footer .btn {
  margin-bottom: 10px;
}
@media screen and (max-width: 768px) {
  .form-group div input {
    margin-bottom: 5px;
  }
}
</style>
