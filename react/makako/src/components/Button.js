
import React from "react";


const Button = (props) => (
  <button className={props.className} >
    {props.content}
  </button>
);

export {Button};