webpackJsonp([4],{

/***/ 610:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(680)

var Component = __webpack_require__(23)(
  /* script */
  __webpack_require__(682),
  /* template */
  __webpack_require__(683),
  /* scopeId */
  "data-v-0af05852",
  /* cssModules */
  null
)
Component.options.__file = "/data/working/letbetcoin/lbt-wallet/src/components/check-transaction/index.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-0af05852", Component.options)
  } else {
    hotAPI.reload("data-v-0af05852", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),

/***/ 612:
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(613), __esModule: true };

/***/ }),

/***/ 613:
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(614);
module.exports = __webpack_require__(24).Object.assign;


/***/ }),

/***/ 614:
/***/ (function(module, exports, __webpack_require__) {

// 19.1.3.1 Object.assign(target, source)
var $export = __webpack_require__(35);

$export($export.S + $export.F, 'Object', { assign: __webpack_require__(615) });


/***/ }),

/***/ 615:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// 19.1.2.1 Object.assign(target, source, ...)
var getKeys = __webpack_require__(66);
var gOPS = __webpack_require__(101);
var pIE = __webpack_require__(67);
var toObject = __webpack_require__(202);
var IObject = __webpack_require__(201);
var $assign = Object.assign;

// should work with symbols and should have deterministic property order (V8 bug)
module.exports = !$assign || __webpack_require__(49)(function () {
  var A = {};
  var B = {};
  // eslint-disable-next-line no-undef
  var S = Symbol();
  var K = 'abcdefghijklmnopqrst';
  A[S] = 7;
  K.split('').forEach(function (k) { B[k] = k; });
  return $assign({}, A)[S] != 7 || Object.keys($assign({}, B)).join('') != K;
}) ? function assign(target, source) { // eslint-disable-line no-unused-vars
  var T = toObject(target);
  var aLen = arguments.length;
  var index = 1;
  var getSymbols = gOPS.f;
  var isEnum = pIE.f;
  while (aLen > index) {
    var S = IObject(arguments[index++]);
    var keys = getSymbols ? getKeys(S).concat(getSymbols(S)) : getKeys(S);
    var length = keys.length;
    var j = 0;
    var key;
    while (length > j) if (isEnum.call(S, key = keys[j++])) T[key] = S[key];
  } return T;
} : $assign;


/***/ }),

/***/ 680:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(681);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(9)("b6039388", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../node_modules/css-loader/index.js?{\"minimize\":false,\"sourceMap\":false}!../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"id\":\"data-v-0af05852\",\"scoped\":true,\"hasInlineConfig\":false}!../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./index.vue", function() {
     var newContent = require("!!../../../node_modules/css-loader/index.js?{\"minimize\":false,\"sourceMap\":false}!../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"id\":\"data-v-0af05852\",\"scoped\":true,\"hasInlineConfig\":false}!../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./index.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 681:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(8)(false);
// imports


// module
exports.push([module.i, "\n.input-group[data-v-0af05852] {\n  width: 100%;\n}\n.text-white[data-v-0af05852] {\n  color: #fff;\n}\n.input-group-addon[data-v-0af05852] {\n  color: inherit\n}\n.qr-code-container[data-v-0af05852] {\n  display: flex;\n  justify-content: center;\n}\n.qr-code[data-v-0af05852] {\n  max-width: 200px;\n  min-width: 100px;\n}\n.qr-code img[data-v-0af05852] {\n  background: #fff;\n  max-width: 100%;\n  height: auto;\n}\n", ""]);

// exports


/***/ }),

/***/ 682:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_assign__ = __webpack_require__(612);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_assign___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_assign__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__vendor_jquery_dist_jquery_min__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__vendor_jquery_dist_jquery_min___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__vendor_jquery_dist_jquery_min__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_web3__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__utils_index__ = __webpack_require__(200);

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
  props: ['txHashParam'],
  data: function data() {
    return {
      loading: false,
      showTxInfo: false,
      txHash: '',
      txInfo: {}
    };
  },
  computed: {
    TxStatus: function TxStatus() {
      return __WEBPACK_IMPORTED_MODULE_2__services_web3__["a" /* TX_STATUS */];
    }
  },
  mounted: function mounted() {
    if (this.txHashParam) {
      this.txHash = this.txHashParam;
      this.checkTransaction();
    }
  },
  methods: {
    checkTransaction: function checkTransaction() {
      var _this = this;

      this.showTxInfo = false;
      this.txInfo = {};
      if (!this.isValidTxHash(this.txHash)) {
        toastr.error('Invalid transaction hash');
        return;
      }
      this.loading = true;
      try {
        __WEBPACK_IMPORTED_MODULE_2__services_web3__["c" /* web3Service */].getTransactionByHash(this.txHash, function (data) {
          _this.txInfo = __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_assign___default()({}, data);
          if (_this.txInfo.status != __WEBPACK_IMPORTED_MODULE_2__services_web3__["a" /* TX_STATUS */].NOT_FOUND) {
            _this.txInfo = __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_assign___default()(_this.txInfo, {
              status: __WEBPACK_IMPORTED_MODULE_3__utils_index__["c" /* utils */].capitalizeString(data.status, '_'),
              amount: __WEBPACK_IMPORTED_MODULE_3__utils_index__["c" /* utils */].formatNumber(data.amount) + ' ' + "LBT",
              gasPriceFormated: __WEBPACK_IMPORTED_MODULE_3__utils_index__["c" /* utils */].formatNumber(data.gasPrice) + ' WEI ( ' + __WEBPACK_IMPORTED_MODULE_3__utils_index__["c" /* utils */].formatNumber(__WEBPACK_IMPORTED_MODULE_2__services_web3__["d" /* web3Utils */].weiToGWei(data.gasPrice)) + ' GWEI )',
              gasLimitFormated: __WEBPACK_IMPORTED_MODULE_3__utils_index__["c" /* utils */].formatNumber(data.gasLimit)
            });
          }
          _this.showTxInfo = true;
          _this.loading = false;
        });
      } catch (e) {
        toastr.error(e.message);
      }
    },
    isValidTxHash: function isValidTxHash(txHash) {
      return __WEBPACK_IMPORTED_MODULE_2__services_web3__["d" /* web3Utils */].isValidTxHash(txHash);
    }
  }
});

/***/ }),

/***/ 683:
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
        _vm.checkTransaction($event)
      }
    }
  }, [_c('div', {
    staticClass: "form-group"
  }, [_c('label', {
    staticClass: "control-label col-sm-3",
    attrs: {
      "for": ""
    }
  }, [_vm._v("Tx Hash")]), _vm._v(" "), _c('b-col', {
    attrs: {
      "sm": "6"
    }
  }, [_c('b-form-input', {
    attrs: {
      "state": _vm.isValidTxHash(_vm.txHash),
      "placeholder": ""
    },
    model: {
      value: (_vm.txHash),
      callback: function($$v) {
        _vm.txHash = $$v
      },
      expression: "txHash"
    }
  })], 1), _vm._v(" "), _c('b-col', {
    attrs: {
      "md": "2",
      "sm": "3"
    }
  }, [_c('b-btn', {
    staticClass: "btn-accent btn-block",
    on: {
      "click": function($event) {
        _vm.checkTransaction()
      }
    }
  }, [_vm._v("Check")])], 1)], 1)])], 1)], 1)], 1)])])], 1)], 1), _vm._v(" "), (_vm.showTxInfo && _vm.txInfo.status == _vm.TxStatus.NOT_FOUND) ? _c('b-col', {
    attrs: {
      "lg": "12"
    }
  }, [_c('hr'), _vm._v(" "), _c('b-row', [_c('b-col', {
    staticClass: "col-sm-offset-1",
    attrs: {
      "sm": "10"
    }
  }, [_c('div', {
    staticClass: "panel"
  }, [_c('div', {
    staticClass: "panel-body"
  }, [_c('b-row', {
    staticClass: "form-group"
  }, [_c('b-col', {
    attrs: {
      "lg": "12"
    }
  }, [_c('h4', [_vm._v("Transaction Not Found")])])], 1)], 1)])])], 1)], 1) : _vm._e(), _vm._v(" "), (_vm.showTxInfo && _vm.txInfo.status != _vm.TxStatus.NOT_FOUND) ? _c('b-col', {
    attrs: {
      "lg": "12"
    }
  }, [_c('hr'), _vm._v(" "), _c('b-row', [_c('b-col', {
    staticClass: "col-sm-offset-1",
    attrs: {
      "sm": "10"
    }
  }, [_c('div', {
    staticClass: "panel"
  }, [_c('div', {
    staticClass: "panel-body"
  }, [_c('b-row', {
    staticClass: "form-group"
  }, [_c('b-col', {
    attrs: {
      "lg": "12"
    }
  }, [_c('h4', [_vm._v("Transaction Found")])])], 1), _vm._v(" "), _c('b-row', {
    staticClass: "form-group"
  }, [_c('b-col', {
    attrs: {
      "sm": "3",
      "md": "2"
    }
  }, [_vm._v("\n                Tx Hash\n              ")]), _vm._v(" "), _c('b-col', {
    attrs: {
      "sm": "9",
      "md": "10"
    }
  }, [_c('span', {
    staticClass: "text-white"
  }, [_vm._v(_vm._s(_vm.txInfo.hash))])])], 1), _vm._v(" "), _c('b-row', {
    staticClass: "form-group"
  }, [_c('b-col', {
    attrs: {
      "sm": "3",
      "md": "2"
    }
  }, [_vm._v("\n                Tx Status\n              ")]), _vm._v(" "), _c('b-col', {
    attrs: {
      "sm": "9",
      "md": "10"
    }
  }, [_c('span', {
    staticClass: "text-white"
  }, [_vm._v(_vm._s(_vm.txInfo.status))])])], 1), _vm._v(" "), _c('b-row', {
    staticClass: "form-group"
  }, [_c('b-col', {
    attrs: {
      "sm": "3",
      "md": "2"
    }
  }, [_vm._v("\n                From Address\n              ")]), _vm._v(" "), _c('b-col', {
    attrs: {
      "sm": "9",
      "md": "10"
    }
  }, [_c('span', {
    staticClass: "text-white"
  }, [_vm._v(_vm._s(_vm.txInfo.from))])])], 1), _vm._v(" "), _c('b-row', {
    staticClass: "form-group"
  }, [_c('b-col', {
    attrs: {
      "sm": "3",
      "md": "2"
    }
  }, [_vm._v("\n                To Address\n              ")]), _vm._v(" "), _c('b-col', {
    attrs: {
      "sm": "9",
      "md": "10"
    }
  }, [_c('span', {
    staticClass: "text-white"
  }, [_vm._v(_vm._s(_vm.txInfo.to))])])], 1), _vm._v(" "), _c('b-row', {
    staticClass: "form-group"
  }, [_c('b-col', {
    attrs: {
      "sm": "3",
      "md": "2"
    }
  }, [_vm._v("\n                Amount\n              ")]), _vm._v(" "), _c('b-col', {
    attrs: {
      "sm": "9",
      "md": "10"
    }
  }, [_c('span', {
    staticClass: "text-white"
  }, [_vm._v(_vm._s(_vm.txInfo.amount))])])], 1), _vm._v(" "), _c('b-row', {
    staticClass: "form-group"
  }, [_c('b-col', {
    attrs: {
      "sm": "3",
      "md": "2"
    }
  }, [_vm._v("\n                Nonce\n              ")]), _vm._v(" "), _c('b-col', {
    attrs: {
      "sm": "9",
      "md": "10"
    }
  }, [_c('span', {
    staticClass: "text-white"
  }, [_vm._v(_vm._s(_vm.txInfo.nonce))])])], 1), _vm._v(" "), _c('b-row', {
    staticClass: "form-group"
  }, [_c('b-col', {
    attrs: {
      "sm": "3",
      "md": "2"
    }
  }, [_vm._v("\n                Gas Limit\n              ")]), _vm._v(" "), _c('b-col', {
    attrs: {
      "sm": "9",
      "md": "10"
    }
  }, [_c('span', {
    staticClass: "text-white"
  }, [_vm._v(_vm._s(_vm.txInfo.gasLimitFormated))])])], 1), _vm._v(" "), _c('b-row', {
    staticClass: "form-group"
  }, [_c('b-col', {
    attrs: {
      "sm": "3",
      "md": "2"
    }
  }, [_vm._v("\n                Gas Price\n              ")]), _vm._v(" "), _c('b-col', {
    attrs: {
      "sm": "9",
      "md": "10"
    }
  }, [_c('span', {
    staticClass: "text-white"
  }, [_vm._v(_vm._s(_vm.txInfo.gasPriceFormated))])])], 1), _vm._v(" "), _c('b-row', {
    staticClass: "form-group"
  }, [_c('b-col', {
    attrs: {
      "sm": "3",
      "md": "2"
    }
  }, [_vm._v("\n                Data\n              ")]), _vm._v(" "), _c('b-col', {
    attrs: {
      "sm": "9",
      "md": "10"
    }
  }, [_c('span', {
    staticClass: "text-white"
  }, [_vm._v(_vm._s(_vm.txInfo.data))])])], 1)], 1)])])], 1)], 1) : _vm._e(), _vm._v(" "), _c('div', {
    staticClass: "clearfix"
  })], 1)
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-0af05852", module.exports)
  }
}

/***/ })

});