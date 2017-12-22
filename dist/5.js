webpackJsonp([5],{

/***/ 609:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(676)

var Component = __webpack_require__(23)(
  /* script */
  __webpack_require__(678),
  /* template */
  __webpack_require__(679),
  /* scopeId */
  "data-v-5e5d2d56",
  /* cssModules */
  null
)
Component.options.__file = "/data/working/letbetcoin/lbt-wallet/src/components/check-balance/index.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-5e5d2d56", Component.options)
  } else {
    hotAPI.reload("data-v-5e5d2d56", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),

/***/ 676:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(677);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(9)("41cc3e25", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../node_modules/css-loader/index.js?{\"minimize\":false,\"sourceMap\":false}!../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"id\":\"data-v-5e5d2d56\",\"scoped\":true,\"hasInlineConfig\":false}!../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./index.vue", function() {
     var newContent = require("!!../../../node_modules/css-loader/index.js?{\"minimize\":false,\"sourceMap\":false}!../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"id\":\"data-v-5e5d2d56\",\"scoped\":true,\"hasInlineConfig\":false}!../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./index.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 677:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(8)(false);
// imports


// module
exports.push([module.i, "\n.input-group[data-v-5e5d2d56] {\n  width: 100%;\n}\n.text-white[data-v-5e5d2d56] {\n  color: #fff;\n}\n.input-group-addon[data-v-5e5d2d56] {\n  color: inherit;\n}\n.qr-code-container[data-v-5e5d2d56] {\n  display: flex;\n  justify-content: center;\n}\n.qr-code[data-v-5e5d2d56] {\n  max-width: 200px;\n  min-width: 100px;\n}\n.qr-code img[data-v-5e5d2d56] {\n  background: #fff;\n  max-width: 100%;\n  height: auto;\n}\ncode[data-v-5e5d2d56] {\n  word-wrap: break-word;\n}\n.form-group[data-v-5e5d2d56] {\n  margin-bottom: 10px;\n}\n", ""]);

// exports


/***/ }),

/***/ 678:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__vendor_jquery_dist_jquery_min__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__vendor_jquery_dist_jquery_min___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__vendor_jquery_dist_jquery_min__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_web3__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__utils_index__ = __webpack_require__(200);
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
//
//
//
//
//





/* harmony default export */ __webpack_exports__["default"] = ({
  props: ['addressParam'],
  data: function data() {
    return {
      address: '',
      loading: false,
      result: {}
    };
  },
  mounted: function mounted() {
    if (this.addressParam) {
      this.address = this.addressParam;
      this.checkAddress();
    }
  },
  computed: {
    sanitizeAddress: function sanitizeAddress() {
      return __WEBPACK_IMPORTED_MODULE_1__services_web3__["d" /* web3Utils */].sanitizeHex(this.address);
    }
  },
  methods: {
    checkAddress: function checkAddress() {
      var _this = this;

      this.result = {};
      if (!this.isAddress(this.address)) {
        toastr.error('invalid address');
        return;
      }
      this.loading = true;
      var balance = __WEBPACK_IMPORTED_MODULE_1__services_web3__["c" /* web3Service */].getBalance(this.sanitizeAddress, function (data) {
        _this.result = {
          address: _this.sanitizeAddress,
          balance: __WEBPACK_IMPORTED_MODULE_2__utils_index__["c" /* utils */].formatNumber(data, '0') + ' ' + "LBT"
        };
        _this.loading = false;
      });
    },
    isAddress: function isAddress(address) {
      return __WEBPACK_IMPORTED_MODULE_1__services_web3__["d" /* web3Utils */].isValidAddress(address);
    }
  }
});

/***/ }),

/***/ 679:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('b-row', {
    class: {
      'ld-loading': _vm.loading
    }
  }, [_c('div', {
    staticClass: "loader"
  }, [_c('div', {
    staticClass: "loader-bar"
  })]), _vm._v(" "), _c('b-col', {
    attrs: {
      "lg": "12"
    }
  }, [_c('b-row', [_c('b-col', {
    attrs: {
      "md": "12"
    }
  }, [_c('div', {
    staticClass: "panel"
  }, [_c('div', {
    staticClass: "panel-header"
  }, [_vm._v(" ")]), _vm._v(" "), _c('div', {
    staticClass: "panel-body text-center"
  }, [_c('b-row', [_c('b-col', {
    staticClass: "col-md-offset-2 form-horizontal",
    attrs: {
      "md": "8"
    }
  }, [_c('b-form', {
    staticClass: "encrypted-wallet",
    on: {
      "submit": function($event) {
        $event.stopPropagation();
        $event.preventDefault();
        _vm.checkAddress($event)
      }
    }
  }, [_c('div', {
    staticClass: "form-group"
  }, [_c('label', {
    staticClass: "control-label col-sm-3",
    attrs: {
      "for": ""
    }
  }, [_vm._v("Address")]), _vm._v(" "), _c('b-col', {
    attrs: {
      "sm": "6"
    }
  }, [_c('b-form-input', {
    attrs: {
      "state": _vm.isAddress(_vm.address),
      "placeholder": "Input a address"
    },
    model: {
      value: (_vm.address),
      callback: function($$v) {
        _vm.address = $$v
      },
      expression: "address"
    }
  })], 1), _vm._v(" "), _c('b-col', {
    attrs: {
      "md": "2",
      "sm": "3"
    }
  }, [_c('b-btn', {
    staticClass: "btn-accent btn-block",
    on: {
      "click": _vm.checkAddress
    }
  }, [_vm._v("Check")])], 1)], 1)])], 1)], 1)], 1)])])], 1)], 1), _vm._v(" "), (_vm.result.address > 0) ? _c('b-col', {
    attrs: {
      "lg": "12"
    }
  }, [_c('hr'), _vm._v(" "), _c('b-col', {
    staticClass: "col-sm-offset-1 col-md-offset-2",
    attrs: {
      "md": "8",
      "sm": "10"
    }
  }, [_c('div', {
    staticClass: "panel panel-filled"
  }, [_c('div', {
    staticClass: "panel-header"
  }, [_vm._v(" ")]), _vm._v(" "), _c('div', {
    staticClass: "panel-body"
  }, [_c('b-col', {
    attrs: {
      "sm": "12"
    }
  }, [_c('div', {
    staticClass: "form-horizontal"
  }, [_c('div', {
    staticClass: "form-group"
  }, [_c('label', {
    staticClass: "col-sm-3 control-label",
    attrs: {
      "for": ""
    }
  }, [_vm._v("Address")]), _vm._v(" "), _c('b-col', {
    attrs: {
      "sm": "9"
    }
  }, [_c('b-form-input', {
    attrs: {
      "readonly": "",
      "value": _vm.result.address
    }
  })], 1)], 1), _vm._v(" "), _c('div', {
    staticClass: "form-group"
  }, [_c('label', {
    staticClass: "col-sm-3 control-label",
    attrs: {
      "for": ""
    }
  }, [_vm._v("Balance")]), _vm._v(" "), _c('b-col', {
    attrs: {
      "sm": "9"
    }
  }, [_c('p', {
    staticClass: "form-control-static"
  }, [_vm._v(_vm._s(_vm.result.balance))])])], 1)])])], 1)])])], 1) : _vm._e(), _vm._v(" "), _c('div', {
    staticClass: "clearfix"
  })], 1)
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-5e5d2d56", module.exports)
  }
}

/***/ })

});