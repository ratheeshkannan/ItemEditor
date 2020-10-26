import React from "react";
import PropTypes from "prop-types";
import "./Label.css";

export const Label = React.memo((props) => {
  const { value, id } = props;
  return (
    <label className="label" htmlFor={id}>
      {value}
    </label>
  );
});

Label.propTypes = {
  value: PropTypes.string,
  id: PropTypes.string,
};
