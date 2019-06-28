import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {createReactElement} from "./componentGenerator/reactFactory";
let json = {
  id:3,
  acf_fc_layout: "Div",
  class: "ciao",
  children: [
    {
      id: 1,
      acf_fc_layout: "Paragraph",
      content: "Hello world"
    }
  ]

};
ReactDOM.render(createReactElement(json), document.getElementById('root'));
console.log(React.createElement("div",{className:"ciao"}))
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
