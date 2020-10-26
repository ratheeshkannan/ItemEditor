import React from "react";
import PropTypes from "prop-types";
import "./Toggle.css";

export const Toggle = React.memo((props) => {
  const { value, id, onChange } = props;
  return <input type="checkbox" checked={!!value} id={id} onChange={onChange} className={"toggle"}/>;
});

Toggle.propTypes = {
  value: PropTypes.bool,
  id: PropTypes.string,
  onChange: PropTypes.func,
};
