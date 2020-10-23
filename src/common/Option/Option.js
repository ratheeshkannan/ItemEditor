import React from "react";
import PropTypes from "prop-types";
import "./Option.css";

export const Option = React.memo((props) => {
  const { value, options, id } = props;
  return (
    <select className="option" value={value} id={id}>
      {options.map((option) => (
        <option value={option.optionValue}> {option.optionName} </option>
      ))}
    </select>
  );
});

Option.propTypes = {
  settings: PropTypes.object,
};
