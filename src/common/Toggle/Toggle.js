import React from "react";
import PropTypes from "prop-types";
import "./Toggle.css";

export const Toggle = React.memo((props) => {
  const { value, id } = props;
  return <input type="checkbox" selected={value} id={id} />;
});

Toggle.propTypes = {
  settings: PropTypes.object,
};
