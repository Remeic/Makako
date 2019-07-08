import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import {createReactElement} from "../src/componentGenerator/reactFactory";
import axios from "axios";


function Home() {
  const [data, setData] = useState({});

  useEffect(() => {
    let ignore = false;

    async function fetchData() {
      const result = await axios('http://localhost:8000/wp-json/wp/v2/makako/home');
      if (!ignore) setData(result.data.acf.builder[0]);     
  }

    fetchData();
    return () => { ignore = true; }
  }, []);

  return (<DynamicPage  elements={data} />);
}

function DynamicPage(props) {

  function getPage() {
        
    return createReactElement(props.elements)
  }

  return <div>{ getPage() }</div>
}

export default Home;