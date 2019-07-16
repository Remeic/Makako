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

/***/ "./node_modules/@babel/runtime-corejs2/core-js/json/stringify.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/json/stringify.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/json/stringify */ "core-js/library/fn/json/stringify");

/***/ }),

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
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! isomorphic-unfetch */ "isomorphic-unfetch");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "/Users/giulio/Documents/Personale/Makako/react/makako/pages/index.js";





function Home(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(DynamicPage, {
    elements: props.elements,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  });
}

function DynamicPage(props) {
  function getPage() {
    return Object(_src_componentGenerator_reactFactory__WEBPACK_IMPORTED_MODULE_2__["createReactElement"])(props.elements);
  }

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }, getPage());
}

Home.getInitialProps = async function () {
  const res = await isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_3___default()('http://localhost:8000/wp-json/wp/v2/makako/home');
  const data = await res.json();
  return {
    elements: data.acf.builder[0]
  };
};

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
/* harmony import */ var _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/json/stringify */ "./node_modules/@babel/runtime-corejs2/core-js/json/stringify.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/keys */ "./node_modules/@babel/runtime-corejs2/core-js/object/keys.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components */ "./src/components/index.js");




/**
* Function that return props for Wysiwyg component and unscaping html string by decodeURI method
* Remove \n if present in content string
* @param {*} elementJson ustom Element (defined by ACF)
* Output: {} is property content is not defined or Object with content props
*/

function additionalWysiwygProps(elementJson) {
  let result = {};

  if (elementJson.hasOwnProperty('content')) {
    let content = elementJson['content'];
    content = content.replace(/(?:\r\n|\r|\n)/g, '<br>'); // content = decodeURI(content) // Unscaping string to back to HTML

    result["content"] = content;
  }

  return result;
}
/**
 * Function that return props for Paragraph component
 * @param {*} elementJson Custom Element JSON (defined by ACF)
 * Output: {} is property content is not defined or Object with content props
 */


function additionalDefaultProps(elementJson) {
  let result = {};

  if (elementJson.hasOwnProperty('content')) {
    result["content"] = elementJson['content'];
  }

  return result;
}
/**
 * Function that return Props Dictionary, empty if no component detected 
 * @param {*} elementJson Custom Element JSON (defined by ACF)
 * Output: Object with all additional props
 */


function additionalProps(elementJson) {
  let result;

  switch (elementJson.acf_fc_layout) {
    case 'Wysiwyg':
      result = additionalWysiwygProps(elementJson);
      break;

    default:
      result = additionalDefaultProps(elementJson);
      break;
  }

  return result;
}
/**
 * Function that return React element instance with props and eventually children
 * @param {*} elementJson Custom Element JSON (defined by ACF)
 * Output: React element instance (eventually Tree)
 */


function createReactElement(elementJson) {
  console.log(elementJson);
  let result = "";
  let props = {};

  if (elementIsValid(elementJson)) {
    props = additionalProps(elementJson);
    props["key"] = validateKey(elementJson["id"]);

    if (elementHasClass(elementJson)) {
      props["className"] = elementJson["class"];
    }

    result = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_components__WEBPACK_IMPORTED_MODULE_3__["components"][elementJson['acf_fc_layout']], props, (elementJson.children || []).map(children => createReactElement(children)));
  } else {//console.log("Elemento non valido");
  }

  return result;
}
/**
 * Function return true if elementJson is valid
 * elmentJson is valid if is not undefined or "" or empty and contains acf_fc_layout key
 * @param {*} elementJson Custom Element JSON (defined by ACF)
 * Output: true if element json object is valid or false
 */


function elementIsValid(elementJson) {
  let result = false;

  try {
    if (!(elementJson === undefined || elementJson === "" || _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_1___default()(elementJson) === 0) && elementJson.hasOwnProperty('acf_fc_layout')) {
      result = true;
    }
  } catch (error) {
    console.log("Element -> " + _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0___default()(elementJson));
  }

  return result;
}
/**
 * Function return true if elmentJson object contain class key
 * @param {*} elementJson Custom Element JSON (defined by ACF)
 * Output: true if object contain class key
 */


function elementHasClass(elementJson) {
  let result = false;
  let className = elementJson["class"];

  if (className !== '' && className !== undefined) {
    result = true;
  }

  return result;
}
/**
 * Function generate id if is not passed
 * Used for key props in react loops MUST BE UNIQUE
 * @param {*} id Id number received from ACF JSON
 * Output: id if passed or unique number
 */


function validateKey(id) {
  let result = id;

  if (id === '' || id === undefined) {
    result = new Date().valueOf() + Math.floor(Math.random() * 10 + 1);
  }

  return result;
}



/***/ }),

/***/ "./src/components/Button/Button.js":
/*!*****************************************!*\
  !*** ./src/components/Button/Button.js ***!
  \*****************************************/
/*! exports provided: Button */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Button", function() { return Button; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/Users/giulio/Documents/Personale/Makako/react/makako/src/components/Button/Button.js";



const Button = props => react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
  className: props.className,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 8
  },
  __self: undefined
}, props.content);

Button.propTypes = {
  /** Classi che verrannop assegnate al bottone */
  className: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,

  /** Contenuto che verrà visualizzato nel bottone */
  content: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string
};


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

/***/ "./src/components/Wysiwyg.js":
/*!***********************************!*\
  !*** ./src/components/Wysiwyg.js ***!
  \***********************************/
/*! exports provided: Wysiqyg */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Wysiqyg", function() { return Wysiqyg; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/Users/giulio/Documents/Personale/Makako/react/makako/src/components/Wysiwyg.js";


function createMarkup(html) {
  console.log(html);
  return {
    __html: html
  };
}

const Wysiqyg = props => react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
  className: props.className,
  dangerouslySetInnerHTML: createMarkup(props.content),
  __source: {
    fileName: _jsxFileName,
    lineNumber: 12
  },
  __self: undefined
});



/***/ }),

/***/ "./src/components/index.js":
/*!*********************************!*\
  !*** ./src/components/index.js ***!
  \*********************************/
/*! exports provided: Div, Button, Wysiqyg, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "components", function() { return components; });
/* harmony import */ var _Div__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Div */ "./src/components/Div.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Div", function() { return _Div__WEBPACK_IMPORTED_MODULE_0__["Div"]; });

/* harmony import */ var _Paragraph__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Paragraph */ "./src/components/Paragraph.js");
/* harmony import */ var _Wysiwyg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Wysiwyg */ "./src/components/Wysiwyg.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Wysiqyg", function() { return _Wysiwyg__WEBPACK_IMPORTED_MODULE_2__["Wysiqyg"]; });

/* harmony import */ var _Button_Button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Button/Button */ "./src/components/Button/Button.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Button", function() { return _Button_Button__WEBPACK_IMPORTED_MODULE_3__["Button"]; });





const components = {
  "Div": _Div__WEBPACK_IMPORTED_MODULE_0__["Div"],
  "Button": _Button_Button__WEBPACK_IMPORTED_MODULE_3__["Button"],
  "Wysiqyg": _Wysiwyg__WEBPACK_IMPORTED_MODULE_2__["Wysiqyg"]
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

/***/ "core-js/library/fn/json/stringify":
/*!****************************************************!*\
  !*** external "core-js/library/fn/json/stringify" ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/json/stringify");

/***/ }),

/***/ "core-js/library/fn/object/keys":
/*!*************************************************!*\
  !*** external "core-js/library/fn/object/keys" ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/keys");

/***/ }),

/***/ "isomorphic-unfetch":
/*!*************************************!*\
  !*** external "isomorphic-unfetch" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("isomorphic-unfetch");

/***/ }),

/***/ "prop-types":
/*!*****************************!*\
  !*** external "prop-types" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prop-types");

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