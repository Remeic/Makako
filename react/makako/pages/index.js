import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import {createReactElement} from "../src/componentGenerator/reactFactory";
import fetch from 'isomorphic-unfetch';

function Home(props) {
 
  return (<DynamicPage  elements={props.elements} />);
}

function DynamicPage(props) {

  function getPage() {
        
    return createReactElement(props.elements)
  }

  return <div>{ getPage() }</div>
}


Home.getInitialProps = async function() {
  const res = await fetch('http://localhost:8000/wp-json/wp/v2/makako/home');
  const data = await res.json();

  return {
    elements: data.acf.builder[0]
  };
};

export default Home;