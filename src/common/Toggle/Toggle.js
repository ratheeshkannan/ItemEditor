import React from "react";
import PropTypes from "prop-types";
import "./Toggle.css";

export const Toggle = React.memo((props) => {
  const { value, id, onChange } = props;
  return <input type="checkbox" selected={value} id={id} onChange={onChange} />;
});

Toggle.propTypes = {
  settings: PropTypes.object,
};
