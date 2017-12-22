import jquery from './vendor/jquery/dist/jquery.min'
import Vue from 'vue'
import app from './components/app'
import router from './router'
import BootstrapVue from 'bootstrap-vue'
// import pacejs from './vendor/pacejs/pace.min.js'
import VueClipboard from 'vue-clipboard2'
import { web3 } from './services/web3'
import Loader from './plugins/loader'

Vue.use(BootstrapVue)
Vue.use(VueClipboard)

window.web3 = web3
window.$ = window.jQuery = jquery
window.toastr = require('./vendor/toastr/toastr.min')
window.toastr.options = {
  'closeButton': true,
  'debug': false,
  'newestOnTop': false,
  'progressBar': false,
  'positionClass': 'toast-bottom-center',
  'preventDuplicates': false,
  'onclick': null,
  'showDuration': '300',
  'hideDuration': '1000',
  'timeOut': '5000',
  'extendedTimeOut': '1000',
  'showEasing': 'swing',
  'hideEasing': 'linear',
  'showMethod': 'fadeIn',
  'hideMethod': 'fadeOut'
}
require('./vendor/bootstrap/js/bootstrap.min')

Vue.use(Loader)
router.beforeEach((to, from, next) => {
  Vue.$loader.load(true)
  console.log(Vue.$loader)
  $('#navbar-main').collapse('hide')
  if (to.path === '/') {
    next('/new-wallet')
  } else {
    next()
  }
})

router.afterEach((to, from) => {
  document.title = to.meta.title
  Vue.$loader.end()
})

/* eslint no-new:0 */
new Vue({
  el: '#app',
  router,
  template: '<app />',
  components: {
    app
  }
})
