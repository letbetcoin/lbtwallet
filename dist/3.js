webpackJsonp([3],{

/***/ 605:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(622)

var Component = __webpack_require__(23)(
  /* script */
  __webpack_require__(624),
  /* template */
  __webpack_require__(629),
  /* scopeId */
  "data-v-1978efff",
  /* cssModules */
  null
)
Component.options.__file = "/data/working/letbetcoin/lbt-wallet/src/components/layout.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] layout.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-1978efff", Component.options)
  } else {
    hotAPI.reload("data-v-1978efff", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),

/***/ 622:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(623);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(9)("046ff00e", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../node_modules/css-loader/index.js?{\"minimize\":false,\"sourceMap\":false}!../../node_modules/vue-loader/lib/style-compiler/index.js?{\"id\":\"data-v-1978efff\",\"scoped\":true,\"hasInlineConfig\":false}!../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./layout.vue", function() {
     var newContent = require("!!../../node_modules/css-loader/index.js?{\"minimize\":false,\"sourceMap\":false}!../../node_modules/vue-loader/lib/style-compiler/index.js?{\"id\":\"data-v-1978efff\",\"scoped\":true,\"hasInlineConfig\":false}!../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./layout.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 623:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(8)(false);
// imports


// module
exports.push([module.i, "\n.view-header[data-v-1978efff] {\n  min-height: 0;\n  margin: 0;\n  margin-bottom: 20px;\n  margin-top: 30px;\n  padding: 0;\n}\n.content[data-v-1978efff] {\n  margin-left: 0 !important;\n  margin-top: 0;\n  padding-top: 10px;\n}\n.footer[data-v-1978efff] {\n  margin-top: 30px;\n  font-size: 0.85em;\n}\n.footer .panel[data-v-1978efff] {\nmargin-bottom: 0;\n}\n@media screen and (min-width: 768px) {\n.footer[data-v-1978efff] {\n    position: absolute;\n    bottom: 0;\n    left: 0;\n    right: 0;\n    margin-bottom: 0;\n}\n}\nhr[data-v-1978efff] {\n  margin-top: 0;\n}\n.navbar[data-v-1978efff] {\n  margin-bottom: 0;\n  border: none;\n  min-height: 0;\n}\n.navbar-default .navbar-brand[data-v-1978efff],\n.navbar-default .navbar-brand[data-v-1978efff]:focus {\n  height: 50px;\n  padding-top: 15px;\n  padding-bottom: 15px;\n}\n.navbar-nav > li:first-child > a[data-v-1978efff] {\n  padding-left: 20px;\n}\n.navbar-nav > li:last-child > a[data-v-1978efff] {\n  padding: 20px 15px;\n}\n.nav > li.active[data-v-1978efff] {\n  background: transparent;\n}\n.nav > li[data-v-1978efff]:after {\n  content: \"\";\n  display: block;\n  height: 2px;\n  background-color: transparent;\n}\n.nav > li.active > a[data-v-1978efff] {\n  background: transparent;\n  color: #f6a821;\n}\n.nav > li.active[data-v-1978efff]:after {\n  background-color: #f6a821;\n}\n", ""]);

// exports


/***/ }),

/***/ 624:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__vendor_jquery_dist_jquery_min__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__vendor_jquery_dist_jquery_min___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__vendor_jquery_dist_jquery_min__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__layout_header_vue__ = __webpack_require__(625);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__layout_header_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__layout_header_vue__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



var layout = {
  components: { VHeader: __WEBPACK_IMPORTED_MODULE_1__layout_header_vue___default.a },
  mounted: function mounted() {
    __WEBPACK_IMPORTED_MODULE_0__vendor_jquery_dist_jquery_min___default()(document).ready(function () {});
  }
};
/* harmony default export */ __webpack_exports__["default"] = (layout);

/***/ }),

/***/ 625:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(626)

var Component = __webpack_require__(23)(
  /* script */
  null,
  /* template */
  __webpack_require__(628),
  /* scopeId */
  "data-v-337288cd",
  /* cssModules */
  null
)
Component.options.__file = "/data/working/letbetcoin/lbt-wallet/src/components/layout/header.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] header.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-337288cd", Component.options)
  } else {
    hotAPI.reload("data-v-337288cd", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),

/***/ 626:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(627);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(9)("11dd6e0c", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../node_modules/css-loader/index.js?{\"minimize\":false,\"sourceMap\":false}!../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"id\":\"data-v-337288cd\",\"scoped\":true,\"hasInlineConfig\":false}!../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./header.vue", function() {
     var newContent = require("!!../../../node_modules/css-loader/index.js?{\"minimize\":false,\"sourceMap\":false}!../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"id\":\"data-v-337288cd\",\"scoped\":true,\"hasInlineConfig\":false}!../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./header.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 627:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(8)(false);
// imports


// module
exports.push([module.i, "\n.navbar-header #mobile-menu[data-v-337288cd] {\n    height: 40px;\n}\n.navbar-header #mobile-menu a[data-v-337288cd],\n.navbar-header #mobile-menu a i[data-v-337288cd] {\n    line-height: 25px;\n}\n.navbar-default .navbar-brand[data-v-337288cd], .navbar-default .navbar-brand[data-v-337288cd]:focus {\n    height: 43px;\n    padding-top: 13px;\n    padding-bottom: 13px;\n}\n.navbar[data-v-337288cd] {\n  margin-bottom: 0;\n  border: none;\n  min-height: 0;\n}\n.navbar-nav > li:last-child > a[data-v-337288cd],\n.navbar-nav > li > a[data-v-337288cd] {\n    padding-top: 10px;\n    padding-bottom: 10px;\n}\n.navbar-nav > li:first-child > a[data-v-337288cd] {\n    padding-left: 15px;\n}\n@media screen and (min-width: 1119px){\n.navbar-nav > li:first-child > a[data-v-337288cd] {\n        padding-left: 20px;\n}\n}\n.navbar-right[data-v-337288cd] {\n    font-size: 0.9em;\n}\n.nav > li.active a[data-v-337288cd]:hover,\n.nav > li.active a[data-v-337288cd]:focus,\n.nav > li.active[data-v-337288cd] {\n    background: transparent;\n}\n.nav > li[data-v-337288cd]:after {\n    content: '';\n    display: block;\n    height: 2px;\n    background-color: transparent;\n}\n.nav > li.active > a[data-v-337288cd] {\n    background: transparent;\n    color: #f6a821;\n}\n.nav > li.active a[data-v-337288cd]:focus,\n.nav > li.active a[data-v-337288cd]:hover {\n    color: #f6a821;\n}\n.nav > li.active[data-v-337288cd]:after {\n    background-color: #f6a821;\n}\n.navbar-default .navbar-brand[data-v-337288cd], .navbar-default .navbar-brand[data-v-337288cd]:focus {\n    letter-spacing: 4px;\n}\n@media (max-width: 1118px) {\n.navbar-header[data-v-337288cd],\n    .navbar-nav[data-v-337288cd],\n    .navbar-nav > li[data-v-337288cd] {\n        float: none !important;\n}\n.navbar-collapse.collapse[data-v-337288cd]:not(.in) {\n        display: none !important;\n}\n}\n@media (min-width: 1119px) {\n.navbar-header[data-v-337288cd] {\n        float: left;\n}\n.navbar-collapse.collapse[data-v-337288cd] {\n        display: block;\n}\n.navbar-nav > li[data-v-337288cd] {\n        float: left;\n}\n}\n", ""]);

// exports


/***/ }),

/***/ 628:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('nav', {
    staticClass: "navbar navbar-default"
  }, [_c('div', {
    staticClass: "container-fluid"
  }, [_vm._m(0, false, false), _vm._v(" "), _c('div', {
    staticClass: "navbar navbar-collapse collapse",
    attrs: {
      "id": "navbar-main"
    }
  }, [_c('ul', {
    staticClass: "nav navbar-nav"
  }, [_c('router-link', {
    attrs: {
      "to": "/new-wallet",
      "tag": "li",
      "active-class": "active"
    }
  }, [_c('a', [_vm._v("New wallet")])]), _vm._v(" "), _c('router-link', {
    attrs: {
      "to": "/send-lbt",
      "tag": "li",
      "active-class": "active"
    }
  }, [_c('a', [_vm._v("Send LBT")])]), _vm._v(" "), _c('router-link', {
    attrs: {
      "to": "/wallet-info",
      "tag": "li",
      "active-class": "active"
    }
  }, [_c('a', [_vm._v("Wallet Info")])]), _vm._v(" "), _c('router-link', {
    attrs: {
      "to": "/check-balance",
      "tag": "li",
      "active-class": "active"
    }
  }, [_c('a', [_vm._v("Check Balance")])]), _vm._v(" "), _c('router-link', {
    attrs: {
      "to": "/check-transaction",
      "tag": "li",
      "active-class": "active"
    }
  }, [_c('a', [_vm._v("Check Transaction")])]), _vm._v(" "), _c('router-link', {
    attrs: {
      "to": "/faq",
      "tag": "li",
      "active-class": "active"
    }
  }, [_c('a', [_vm._v("FAQ")])])], 1), _vm._v(" "), _vm._m(1, false, false)])])])
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "navbar-header"
  }, [_c('div', {
    attrs: {
      "id": "mobile-menu"
    }
  }, [_c('div', {
    staticClass: "left-nav-toggle"
  }, [_c('a', {
    staticClass: "collapsed",
    attrs: {
      "href": "#navbar-main",
      "data-toggle": "collapse",
      "role": "button",
      "target": "#navbar-main"
    }
  }, [_c('i', {
    staticClass: "stroke-hamburgermenu"
  })])])]), _vm._v(" "), _c('a', {
    staticClass: "navbar-brand",
    attrs: {
      "href": "/"
    }
  }, [_vm._v("\n                LBT WALLET\n            ")])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('ul', {
    staticClass: "nav navbar-nav navbar-right"
  }, [_c('li', [_c('a', [_vm._v("v.0.1-beta")])]), _vm._v(" "), _c('li', [_c('a', {
    staticClass: "active",
    attrs: {
      "href": "https://github.com/letbetcoin/lbtwallet",
      "target": "_blank"
    }
  }, [_vm._v("Source code")])])])
}]}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-337288cd", module.exports)
  }
}

/***/ }),

/***/ 629:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('v-header'), _vm._v(" "), _c('section', {
    staticClass: "content"
  }, [_c('div', {
    staticClass: "container"
  }, [_c('b-row', [_c('b-col', {
    attrs: {
      "lg": "12"
    }
  }, [_c('div', {
    staticClass: "view-header text-center"
  }, [_c('h2', [_vm._v(_vm._s(this.$route.meta.title))])])])], 1), _vm._v(" "), _c('router-view')], 1)]), _vm._v(" "), _c('div', {
    staticClass: "clearfix"
  }), _vm._v(" "), _vm._m(0, false, false)], 1)
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "footer"
  }, [_c('div', {
    staticClass: "panel panel-filled"
  }, [_c('div', {
    staticClass: "panel-body"
  }, [_c('p', [_vm._v("We don't hold your keys. We also can't recover your keys. Please do\n                    "), _c('span', {
    staticClass: "text-warning"
  }, [_vm._v("BACKUP")])]), _vm._v(" "), _c('p', [_vm._v("LBTWallet is free & open-sourced. It's a client-side to connect to LBT Blockchain. You could download all source code and run it locally.")])])])])
}]}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-1978efff", module.exports)
  }
}

/***/ })

});