import React from "React";
import {components} from "../components"

function createDivReactElement(elementJson) {
  // console.log(elementJson)
  let result = "";
  let props = {};
  if(!(elementJson == "" || elementJson == undefined || Object.keys(elementJson).length == 0)){
    if(elementJson.hasOwnProperty('class')){
      props["className"] = elementJson.class;
    }
    result = React.createElement(components[elementJson.acf_fc_layout],props,);
  }
  return result;
}

export {
  createDivReactElement
}

