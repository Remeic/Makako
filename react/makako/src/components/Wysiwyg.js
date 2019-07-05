
import React from "react";


function createMarkup(html) {
  return {__html: html};
}

const Wysiwyg  = (props) => (
  
  <div className={props.className} dangerouslySetInnerHTML={createMarkup(props.content)} >
  </div>
);

export {Wysiwyg};