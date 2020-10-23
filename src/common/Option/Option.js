import React from "react";
import PropTypes from "prop-types";
import "./Option.css";

export const Option = React.memo((props) => {
  const { value, options } = props;
  return (
    <select className="option" value={value}>
      {options.map((option) => (
        <option value={option.optionValue}> {option.optionName} </option>
      ))}
    </select>
  );
});

Option.propTypes = {
  settings: PropTypes.object,
};
