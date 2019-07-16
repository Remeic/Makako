
import React from "react";
import PropTypes from 'prop-types';



const Button = (props) => (
  <button className={props.className} >
    {props.content}
  </button>
);


Button.propTypes = {
  /** Classi che verrannop assegnate al bottone */
  className: PropTypes.string,
  /** Contenuto che verrà visualizzato nel bottone */
  content: PropTypes.string
}
export {Button};