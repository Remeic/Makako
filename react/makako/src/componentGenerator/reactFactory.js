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
function additionalParagraphProps(elementJson) {
  let result = {};
  if(elementJson.hasOwnProperty('content')){
    result["content"]=elementJson.content;
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
      result = {}
      break;
  }
  return result;
}

function createReactElement(elementJson,key) {
  let result = "";
  let props = {};
  if (
    !(
      elementJson === undefined ||
      elementJson === "" ||
      Object.keys(elementJson) === 0
    ) &&
    elementJson.hasOwnProperty('acf_fc_layout')
  ) {
    if(key!== "" || key != undefined){
      props["key"] = key;
    }
    props = additionalProps(elementJson);
    result = React.createElement(components[elementJson.acf_fc_layout],props, (elementJson.children || [])
    .map((children,key) => createReactElement(children,key)));
  }

  return result;
}

export { createReactElement };
