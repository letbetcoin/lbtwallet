webpackJsonp([1],{

/***/ 606:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(630)

var Component = __webpack_require__(23)(
  /* script */
  __webpack_require__(632),
  /* template */
  __webpack_require__(645),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "/data/working/letbetcoin/lbt-wallet/src/components/new-wallet/index.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-eda23144", Component.options)
  } else {
    hotAPI.reload("data-v-eda23144", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),

/***/ 630:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(631);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(9)("8dee2a74", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../node_modules/css-loader/index.js?{\"minimize\":false,\"sourceMap\":false}!../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"id\":\"data-v-eda23144\",\"scoped\":false,\"hasInlineConfig\":false}!../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./index.vue", function() {
     var newContent = require("!!../../../node_modules/css-loader/index.js?{\"minimize\":false,\"sourceMap\":false}!../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"id\":\"data-v-eda23144\",\"scoped\":false,\"hasInlineConfig\":false}!../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./index.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 631:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(8)(false);
// imports


// module
exports.push([module.i, "\n.panel.disabled {\n  position: relative;\n  opacity: 0.8;\n}\n.panel.disabled:after {\n  content: \"\";\n  display: block;\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  z-index: 1;\n  background: rgba(0, 0, 0, 0.4);\n}\n", ""]);

// exports


/***/ }),

/***/ 632:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__create_password__ = __webpack_require__(633);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__create_password___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__create_password__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__save_keystore__ = __webpack_require__(638);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__save_keystore___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__save_keystore__);



/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'new-wallet',
  components: {
    saveKeystore: __WEBPACK_IMPORTED_MODULE_1__save_keystore___default.a,
    createPassword: __WEBPACK_IMPORTED_MODULE_0__create_password___default.a
  },
  data: function data() {
    return {
      createdPassword: false,
      savedKeyStore: false,
      creatingWallet: false,
      walletData: {}
    };
  },
  computed: {},
  methods: {
    submitForm: function submitForm(data) {
      var _this = this;

      // this.$loader.start()
      this.creatingWallet = true;
      this.walletData = data;
      setTimeout(function () {
        _this.createdPassword = true;
        _this.creatingWallet = false;
        // this.$loader.end()
      }, 100);
    }
  }
});

/***/ }),

/***/ 633:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(634)

var Component = __webpack_require__(23)(
  /* script */
  __webpack_require__(636),
  /* template */
  __webpack_require__(637),
  /* scopeId */
  "data-v-f237654a",
  /* cssModules */
  null
)
Component.options.__file = "/data/working/letbetcoin/lbt-wallet/src/components/new-wallet/create-password/index.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-f237654a", Component.options)
  } else {
    hotAPI.reload("data-v-f237654a", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),

/***/ 634:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(635);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(9)("1057b2c8", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../node_modules/css-loader/index.js?{\"minimize\":false,\"sourceMap\":false}!../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"id\":\"data-v-f237654a\",\"scoped\":true,\"hasInlineConfig\":false}!../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./index.vue", function() {
     var newContent = require("!!../../../../node_modules/css-loader/index.js?{\"minimize\":false,\"sourceMap\":false}!../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"id\":\"data-v-f237654a\",\"scoped\":true,\"hasInlineConfig\":false}!../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./index.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 635:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(8)(false);
// imports


// module
exports.push([module.i, "\n.panel[data-v-f237654a] {\n    margin-top: 30px;\n}\n.form-new-wallet[data-v-f237654a] {\n    margin: 20px 0 40px;\n    text-align: center;\n}\n.form-new-wallet button[type=\"submit\"][data-v-f237654a] {\n    padding-left: 30px;\n    padding-right: 30px;\n}\n.form-group[data-v-f237654a] {\n    margin-top: 25px;\n    margin-bottom: 25px;\n}\n.description-text[data-v-f237654a] {\n    font-size: 1.1em;\n    line-height: 1.7em;\n    font-weight: normal;\n}\nul[data-v-f237654a] {\n    padding-left: 20px;\n    padding-top: 3px;\n}\nul li[data-v-f237654a] {\n    padding: 7px 0;\n}\n.text-white[data-v-f237654a] {\n    color: #fff;\n}\n", ""]);

// exports


/***/ }),

/***/ 636:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services_web3__ = __webpack_require__(199);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ __webpack_exports__["default"] = ({
    props: ['submit', 'disabled', 'loading'],
    data: function data() {
        return {
            walletPassword: ''
        };
    },
    methods: {
        submitFn: function submitFn(e) {
            var isStrong = this.isStrongPass(this.walletPassword);
            if (isStrong == null) {
                toastr.error('password is empty');
                return;
            } else if (!isStrong) {
                toastr.error('Your password must be at least 8 characters. Please ensure it is a strong password.');
                return;
            }
            var acc = __WEBPACK_IMPORTED_MODULE_0__services_web3__["c" /* web3Service */].createAccount(this.walletPassword);
            this.$emit('submit', acc);
        },
        isStrongPass: function isStrongPass(pass) {
            // if (!pass || pass.length == 0) {
            //     return null
            // }
            return pass.length >= 8;
        }
    }
});

/***/ }),

/***/ 637:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "panel panel-filled",
    class: {
      'ld-loading': _vm.loading
    }
  }, [_vm._m(0, false, false), _vm._v(" "), _c('div', {
    staticClass: "panel-body"
  }, [_c('b-row', [_c('b-col', {
    staticClass: "col-md-offset-1",
    attrs: {
      "md": "10"
    }
  }, [_c('form', {
    staticClass: "form-new-wallet",
    on: {
      "submit": function($event) {
        $event.stopPropagation();
        $event.preventDefault();
        _vm.submitFn($event)
      }
    }
  }, [_c('div', {
    staticClass: "form-group"
  }, [_c('p', {
    staticClass: "text-white",
    staticStyle: {
      "font-size": "1.7em"
    }
  }, [_vm._v("Enter wallet password")])]), _vm._v(" "), _c('div', {
    staticClass: "form-group"
  }, [_c('div', {
    staticClass: "row"
  }, [_c('div', {
    staticClass: "col-sm-10 col-sm-offset-1"
  }, [_c('b-form-input', {
    staticClass: "form-control input-lg",
    attrs: {
      "type": "password",
      "state": _vm.isStrongPass(_vm.walletPassword),
      "id": "exampleInputName",
      "placeholder": "Do NOT forget to save this!!!"
    },
    model: {
      value: (_vm.walletPassword),
      callback: function($$v) {
        _vm.walletPassword = $$v
      },
      expression: "walletPassword"
    }
  })], 1)])]), _vm._v(" "), _c('div', {
    staticClass: "form-group"
  }, [_c('div', {
    staticClass: "description-text text-center"
  }, [_c('div', {
    staticClass: "panel-body"
  }, [_c('p', [_vm._v("\n                                    This password is used to encrypt your private key. Please choose a password as strong as possible. You will need it to unlock your wallet.\n                                ")])])])]), _vm._v(" "), _c('div', {
    staticClass: "form-group"
  }, [_c('button', {
    staticClass: "btn btn-lg btn-w-md btn-accent btn-rounded",
    attrs: {
      "type": "submit"
    }
  }, [_vm._v("Create New Wallet")])])])])], 1)], 1)])
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "loader"
  }, [_c('div', {
    staticClass: "loader-bar"
  })])
}]}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-f237654a", module.exports)
  }
}

/***/ }),

/***/ 638:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(639)

var Component = __webpack_require__(23)(
  /* script */
  __webpack_require__(641),
  /* template */
  __webpack_require__(644),
  /* scopeId */
  "data-v-12cc76c1",
  /* cssModules */
  null
)
Component.options.__file = "/data/working/letbetcoin/lbt-wallet/src/components/new-wallet/save-keystore/index.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-12cc76c1", Component.options)
  } else {
    hotAPI.reload("data-v-12cc76c1", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),

/***/ 639:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(640);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(9)("2060cd8e", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../node_modules/css-loader/index.js?{\"minimize\":false,\"sourceMap\":false}!../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"id\":\"data-v-12cc76c1\",\"scoped\":true,\"hasInlineConfig\":false}!../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./index.vue", function() {
     var newContent = require("!!../../../../node_modules/css-loader/index.js?{\"minimize\":false,\"sourceMap\":false}!../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"id\":\"data-v-12cc76c1\",\"scoped\":true,\"hasInlineConfig\":false}!../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./index.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 640:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(8)(false);
// imports


// module
exports.push([module.i, "\n.form-control-static[data-v-12cc76c1] {\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.form-new-wallet[data-v-12cc76c1] {\n  margin-bottom: 40px;\n}\n.form-group[data-v-12cc76c1] {\n  margin-top: 15px;\n  margin-bottom: 15px;\n}\n.input-group-addon+.input-group-addon[data-v-12cc76c1] {\n  border-left: solid 1px #2c2e34;\n}\n.input-group-addon[data-v-12cc76c1] {\n  color: #fff;\n  background: #52555f;\n  border: none;\n  cursor: pointer;\n}\n.input-group-addon .pe[data-v-12cc76c1] {\n  font-size: 1.1em;\n}\n.description-text[data-v-12cc76c1] {\n  font-size: 1.1em;\n  line-height: 1.4em;\n  font-weight: normal;\n}\nul[data-v-12cc76c1] {\n  padding-left: 20px;\n  padding-top: 3px;\n}\nul li[data-v-12cc76c1] {\n  padding: 7px 0;\n}\n.h4[data-v-12cc76c1] {\n  font-size: 2em;\n  margin-top: 10px;\n  margin-bottom: 20px;\n}\n.text-white[data-v-12cc76c1] {\n  color: #fff;\n}\n.toggle-value[data-v-12cc76c1] {\n  position: absolute;\n  right: 0;\n  display: block;\n  height: 100%;\n  min-width: 35px;\n  background: transparent;\n  line-height: 35px;\n  color: #fff;\n  z-index: 9;\n  font-size: 1.3em;\n}\n.toggle-value .pe[data-v-12cc76c1] {\n  color: inherit;\n}\n.has-toggle-value-input[data-v-12cc76c1] {\n  padding-right: 30px;\n}\n.por[data-v-12cc76c1] {\n  position: relative;\n  overflow: hidden;\n}\n.download-encrypted[data-v-12cc76c1] {\n  margin-bottom: 30px;\n}\n.panel[data-v-12cc76c1] {\n  margin-top: 30px;\n}\n", ""]);

// exports


/***/ }),

/***/ 641:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_json_stringify__ = __webpack_require__(642);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_json_stringify___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_json_stringify__);

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
  props: ['disabled', 'wallet'],
  data: function data() {
    return {
      showPrivateKey: false
    };
  },
  computed: {},
  methods: {
    togglePublicKey: function togglePublicKey() {},
    togglePrivateKey: function togglePrivateKey() {},
    saveEncryptedWallet: function saveEncryptedWallet() {
      var d = __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_json_stringify___default()(this.wallet.privateKeyEncrypted);
      var blob = new Blob([d], { type: 'text/json;charset=UTF-8' });

      var link = document.createElement('a');
      link.href = window.URL.createObjectURL(blob);
      link.download = "encrypted_key.json";
      link.click();
    },
    clipboardCopied: function clipboardCopied(el) {
      $(el.trigger).attr('title', 'Copied').tooltip('fixTitle').tooltip('show').attr('title', 'Click to copy').tooltip('fixTitle');
    }
  },
  mounted: function mounted() {
    $('[data-toggle="tooltip"]').tooltip();
  }
});

/***/ }),

/***/ 642:
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(643), __esModule: true };

/***/ }),

/***/ 643:
/***/ (function(module, exports, __webpack_require__) {

var core = __webpack_require__(24);
var $JSON = core.JSON || (core.JSON = { stringify: JSON.stringify });
module.exports = function stringify(it) { // eslint-disable-line no-unused-vars
  return $JSON.stringify.apply($JSON, arguments);
};


/***/ }),

/***/ 644:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "panel panel-filled",
    class: {
      disabled: _vm.disabled
    }
  }, [_c('div', {
    staticClass: "panel-body"
  }, [_c('div', {
    staticClass: "text-center"
  }, [_c('b-row', [_c('b-col', {
    staticClass: "col-md-offset-1",
    attrs: {
      "md": "10"
    }
  }, [_c('div', {
    staticClass: "col-xs-12"
  }, [_c('div', {
    staticClass: "form-group"
  }, [_c('p', {
    staticClass: "h4"
  }, [_c('i', {
    staticClass: "pe pe-7s-check text-success"
  }), _vm._v(" "), _c('span', [_vm._v("Successful")])])]), _vm._v(" "), _c('div', {
    staticClass: "form-group download-encrypted"
  }, [_c('button', {
    staticClass: "btn btn-lg btn-w-md btn-success",
    on: {
      "click": _vm.saveEncryptedWallet
    }
  }, [_c('span', {
    staticClass: "text-white"
  }, [_vm._v("Save Encrypted Wallet")])])]), _vm._v(" "), _c('div', {
    staticClass: "form-group text-left"
  }, [_c('label', [_vm._v("Your address")]), _vm._v(" "), _c('b-input-group', {
    staticStyle: {
      "width": "100%"
    }
  }, [_c('b-form-input', {
    staticClass: "form-control form-control-static",
    attrs: {
      "value": _vm.wallet.address,
      "readonly": ""
    }
  }), _vm._v(" "), _c('b-input-group-addon', {
    directives: [{
      name: "clipboard",
      rawName: "v-clipboard:copy",
      value: (_vm.wallet.address),
      expression: "wallet.address",
      arg: "copy"
    }, {
      name: "clipboard",
      rawName: "v-clipboard:success",
      value: (_vm.clipboardCopied),
      expression: "clipboardCopied",
      arg: "success"
    }],
    attrs: {
      "data-toggle": "tooltip",
      "data-placement": "bottom",
      "title": "Click to copy"
    }
  }, [_c('i', {
    staticClass: "pe pe-7s-copy-file"
  })])], 1)], 1), _vm._v(" "), _c('div', {
    staticClass: "form-group text-left"
  }, [_c('label', [_vm._v("Your private key")]), _vm._v(" "), _c('b-input-group', {
    staticStyle: {
      "width": "100%"
    }
  }, [_c('div', {
    staticClass: "por"
  }, [_c('b-form-input', {
    staticClass: "form-control form-control-static has-toggle-value-input",
    attrs: {
      "type": _vm.showPrivateKey ? 'text' : 'password',
      "value": _vm.wallet.privateKey,
      "readonly": "",
      "placeholder": "Your private key"
    }
  }), _vm._v(" "), _c('span', {
    staticClass: "toggle-value",
    on: {
      "click": function($event) {
        _vm.showPrivateKey = !_vm.showPrivateKey
      }
    }
  }, [_c('i', {
    staticClass: "fa fa-eye",
    class: {
      'fa-eye': !_vm.showPrivateKey, 'fa-eye-slash': _vm.showPrivateKey
    }
  })])], 1), _vm._v(" "), _c('b-input-group-addon', {
    directives: [{
      name: "clipboard",
      rawName: "v-clipboard:copy",
      value: (_vm.wallet.privateKey),
      expression: "wallet.privateKey",
      arg: "copy"
    }, {
      name: "clipboard",
      rawName: "v-clipboard:success",
      value: (_vm.clipboardCopied),
      expression: "clipboardCopied",
      arg: "success"
    }],
    attrs: {
      "data-toggle": "tooltip",
      "data-placement": "bottom",
      "title": "Click to copy"
    }
  }, [_c('i', {
    staticClass: "pe pe-7s-copy-file"
  })])], 1)], 1)])])], 1), _vm._v(" "), _c('b-row', [_c('b-col', {
    staticClass: "col-md-offset-1",
    attrs: {
      "md": "10"
    }
  }, [_c('div', {
    staticClass: "description-text panel panel-filled panel-c-warning text-left"
  }, [_c('div', {
    staticClass: "panel-body"
  }, [_c('p', [_c('span', {
    staticClass: "text-white"
  }, [_vm._v("Do not lose it!")]), _vm._v(" It cannot be recovered if you lose it.")]), _vm._v(" "), _c('p', [_c('span', {
    staticClass: "text-white"
  }, [_vm._v("Do not share it!")]), _vm._v(" Your funds will be stolen if you use this file on a malicious/phishing site.")]), _vm._v(" "), _c('p', {
    staticStyle: {
      "margin-bottom": "0"
    }
  }, [_c('span', {
    staticClass: "text-white"
  }, [_vm._v("Make a backup!")]), _vm._v(" Secure it like the millions of dollars it may one day be worth.")])])])])], 1)], 1)])])
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-12cc76c1", module.exports)
  }
}

/***/ }),

/***/ 645:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('b-row', [_c('b-col', {
    staticClass: "col-md-offset-2",
    attrs: {
      "md": "8"
    }
  }, [(!_vm.createdPassword) ? _c('create-password', {
    attrs: {
      "loading": _vm.creatingWallet
    },
    on: {
      "submit": _vm.submitForm
    }
  }) : _vm._e(), _vm._v(" "), (_vm.createdPassword) ? _c('save-keystore', {
    attrs: {
      "wallet": _vm.walletData
    }
  }) : _vm._e()], 1)], 1)
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-eda23144", module.exports)
  }
}

/***/ })

});