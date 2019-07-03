module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/keys.js":
/*!********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/keys.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/keys */ "core-js/library/fn/object/keys");

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "react-dom");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _src_componentGenerator_reactFactory__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../src/componentGenerator/reactFactory */ "./src/componentGenerator/reactFactory.js");
var _jsxFileName = "/Users/giulio/Documents/Personale/Makako/react/makako/pages/index.js";




function Home() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(DynamicPage, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  });
}

function DynamicPage(params) {
  function getPage() {
    return Object(_src_componentGenerator_reactFactory__WEBPACK_IMPORTED_MODULE_2__["createReactElement"])(json);
  }

  let json = {
    acf_fc_layout: "Div",
    children: [{
      acf_fc_layout: "Paragraph",
      content: "ciao",
      class: "red-text"
    }, {
      acf_fc_layout: "Paragraph",
      content: "Andrea"
    }, {
      acf_fc_layout: "Paragraph",
      content: "da"
    }, {
      acf_fc_layout: "Paragraph",
      content: "Giulio"
    }]
  };
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    },
    __self: this
  }, getPage());
}

/* harmony default export */ __webpack_exports__["default"] = (Home);

/***/ }),

/***/ "./src/componentGenerator/reactFactory.js":
/*!************************************************!*\
  !*** ./src/componentGenerator/reactFactory.js ***!
  \************************************************/
/*! exports provided: createReactElement */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createReactElement", function() { return createReactElement; });
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/keys */ "./node_modules/@babel/runtime-corejs2/core-js/object/keys.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components */ "./src/components/index.js");


 // function paragraphHelper(elementJson) {
//   let props = {};
//   if (elementJson.hasOwnProperty("content")) {
//     props["content"] = [elementJson.content];
//   }
//   return props;
// }
// function helperType(elementJson) {
//   let result = {};
//   switch (elementJson.acf_fc_layout) {
//     case "Paragraph":
//       result = paragraphHelper(elementJson);
//       break;
//     default:
//       result = {};
//   }
//   return result;
// }
// function createReactElement(elementJson) {
//   let result = "";
//   let props = {};
//   let children = [];
//   elementJson = elementJson || {};
//   if (
//     !(
//       elementJson == "" ||
//       elementJson == undefined ||
//       Object.keys(elementJson).length == 0
//     ) &&
//     elementJson.hasOwnProperty("acf_fc_layout")
//   ) {
//     if (elementJson.hasOwnProperty("class")) {
//       props["className"] = elementJson.class;
//     }
//     if (elementJson.hasOwnProperty("children")) {
//       children = elementJson.children.map(c => createReactElement(c));
//     }
//     let helper = helperType(elementJson);
//     props = Object.assign(props, helper);
//     result = React.createElement(components[elementJson.acf_fc_layout], props,children);
//   }
//   return result;
// }
// export { createReactElement };

function additionalParagraphProps(elementJson) {
  let result = {};

  if (elementJson.hasOwnProperty('content')) {
    result["content"] = elementJson.content;
  }

  return result;
}

function additionalProps(elementJson) {
  let result;

  switch (elementJson.acf_fc_layout) {
    case 'Paragraph':
      result = additionalParagraphProps(elementJson);
      break;

    default:
      result = {};
      break;
  }

  return result;
}

function createReactElement(elementJson) {
  let result = "";
  let props = {};

  if (!(elementJson === undefined || elementJson === "" || _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0___default()(elementJson) === 0) && elementJson.hasOwnProperty('acf_fc_layout')) {
    props = additionalProps(elementJson);
    props["key"] = validateKey(elementJson["id"]);
    props["className"] = elementJson["class"];
    result = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components__WEBPACK_IMPORTED_MODULE_2__["components"][elementJson.acf_fc_layout], props, (elementJson.children || []).map(children => createReactElement(children)));
  }

  return result;
}

function validateKey(id) {
  let result = id;

  if (id === '' || id === undefined) {
    result = new Date().valueOf();
  }

  return result;
}



/***/ }),

/***/ "./src/components/Div.js":
/*!*******************************!*\
  !*** ./src/components/Div.js ***!
  \*******************************/
/*! exports provided: Div */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Div", function() { return Div; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/Users/giulio/Documents/Personale/Makako/react/makako/src/components/Div.js";


const Div = props => react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
  className: props.className,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 6
  },
  __self: undefined
}, props.children);



/***/ }),

/***/ "./src/components/Paragraph.js":
/*!*************************************!*\
  !*** ./src/components/Paragraph.js ***!
  \*************************************/
/*! exports provided: Paragraph */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Paragraph", function() { return Paragraph; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/Users/giulio/Documents/Personale/Makako/react/makako/src/components/Paragraph.js";


const Paragraph = props => react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
  className: props.className,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 6
  },
  __self: undefined
}, props.content);



/***/ }),

/***/ "./src/components/index.js":
/*!*********************************!*\
  !*** ./src/components/index.js ***!
  \*********************************/
/*! exports provided: Div, Paragraph, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "components", function() { return components; });
/* harmony import */ var _Div__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Div */ "./src/components/Div.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Div", function() { return _Div__WEBPACK_IMPORTED_MODULE_0__["Div"]; });

/* harmony import */ var _Paragraph__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Paragraph */ "./src/components/Paragraph.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Paragraph", function() { return _Paragraph__WEBPACK_IMPORTED_MODULE_1__["Paragraph"]; });



const components = {
  "Div": _Div__WEBPACK_IMPORTED_MODULE_0__["Div"],
  "Paragraph": _Paragraph__WEBPACK_IMPORTED_MODULE_1__["Paragraph"]
};


/***/ }),

/***/ 3:
/*!******************************!*\
  !*** multi ./pages/index.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/giulio/Documents/Personale/Makako/react/makako/pages/index.js */"./pages/index.js");


/***/ }),

/***/ "core-js/library/fn/object/keys":
/*!*************************************************!*\
  !*** external "core-js/library/fn/object/keys" ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/keys");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-dom":
/*!****************************!*\
  !*** external "react-dom" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-dom");

/***/ })

/******/ });
//# sourceMappingURL=index.js.map