/**
 * Common Button component
 */
import React from "react";
import PropTypes from 'prop-types';
import "./Button.css";

export const Button = React.memo((props) => {
  const {value, ...other} = props.settings;  
  return <button type="button" className="button" {...other}>
      {value}
    </button>;
});

Button.propTypes = {
    settings: PropTypes.object,
}
