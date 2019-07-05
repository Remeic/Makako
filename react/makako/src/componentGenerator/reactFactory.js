import React from "react";
import { components } from "../components";

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


/**
* Function that return props for Wysiwyg component and unscaping html string by decodeURI method
* Remove \n if present in content string
* @param {*} elementJson ustom Element (defined by ACF)
* Output: {} is property content is not defined or Object with content props
*/
function additionalWysiwygProps(elementJson){
  let result = {};
  if(elementJson.hasOwnProperty('content')){
    let content = elementJson.content;
    content = content.replace(/(?:\r\n|\r|\n)/g, '<br>');
    // content = decodeURI(content) // Unscaping string to back to HTML
    result["content"] = content;
  }
  return result;
}


/**
 * Function that return props for Paragraph component
 * @param {*} elementJson Custom Element JSON (defined by ACF)
 * Output: {} is property content is not defined or Object with content props
 */
function additionalParagraphProps(elementJson) {
  let result = {};
  if(elementJson.hasOwnProperty('content')){
    result["content"]=elementJson.content;
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
    case 'Paragraph':
      result = additionalParagraphProps(elementJson);
      break;

    case 'Wysiwyg':
      result = additionalWysiwygProps(elementJson);
      break;
  
    default:
      result = {}
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
  let result = "";
  let props = {};
  if (elementIsValid(elementJson)) {
    props = additionalProps(elementJson);
    props["key"] = validateKey(elementJson["id"]);
    if(elementHasClass(elementJson)){
      props["className"] = elementJson["class"];
    }
    result = React.createElement(components[elementJson.acf_fc_layout],props, (elementJson.children || [])
    .map((children) => createReactElement(children)));
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
  if(
   !(elementJson === undefined ||
    elementJson === "" ||
    Object.keys(elementJson) === 0
    ) && (elementJson.hasOwnProperty('acf_fc_layout'))){
      result = true;
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
  if(className !== '' && className !== undefined){
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
  if(id === '' || id === undefined){
    result = (new Date().valueOf())+(Math.floor((Math.random() * 10) + 1));
  }
  return result;
}

export { createReactElement };
