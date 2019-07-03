webpackHotUpdate("static/development/pages/index.js",{

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
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
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



/***/ })

})
//# sourceMappingURL=index.js.31d3046065443bdcb5d1.hot-update.js.map