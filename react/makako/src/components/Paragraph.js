
import React from "react";


const Paragraph = (props) => (
  <p className={props.className} >
    {props.content}
  </p>
);

export {Paragraph};