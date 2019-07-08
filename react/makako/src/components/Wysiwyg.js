
import React from "react";


function createMarkup(html) {
  console.log(html)
  return {__html: html};
}

const Wysiqyg  = (props) => (
  
  <div className={props.className} dangerouslySetInnerHTML={createMarkup(props.content)} >
  </div>
);

export {Wysiqyg};