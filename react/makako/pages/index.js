import React from 'react';
import ReactDOM from 'react-dom';
import {createReactElement} from "../src/componentGenerator/reactFactory";



function Home() {
  return <DynamicPage />
}

function DynamicPage(params) {

  function getPage() {
    return createReactElement(json)
  }

  let json = {
    acf_fc_layout: "Div",
    children: [
      {
        acf_fc_layout: "Paragraph",
        content: "ciao",
        class:"red-text"
      },{
        acf_fc_layout: "Paragraph",
        content: "Andrea",
      },
      {
        acf_fc_layout: "Paragraph",
        content: "da",
      },
      {
        acf_fc_layout: "Paragraph",
        content: "Giulio",
      }
    ]
  };

  return <div>{ getPage() }</div>
}

export default Home;