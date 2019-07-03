import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {createReactElement} from "./componentGenerator/reactFactory";

let json = {
  acf_fc_layout: "Div",
  children: [
    {
      acf_fc_layout: "Paragraph",
      content: "Makako 🙊",
      class:"red-text"
    },{
      acf_fc_layout: "Paragraph",
      content: "sta",
    },
    {
      acf_fc_layout: "Paragraph",
      content: "arrivando",
    },
    {
      acf_fc_layout: "Button",
      content: "Chiappami",
    }
  ]
};
ReactDOM.render(createReactElement(json), document.getElementById('root'));
console.log(React.createElement("div",{className:"ciao"}))
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
