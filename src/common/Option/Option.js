import React from "react";
import PropTypes from "prop-types";
import "./Option.css";

export const Option = React.memo((props) => {
  const { value, options, id, onChange } = props;
  return (
    <select className="option" value={value} id={id} onChange={onChange}>
      {options.map((option, index) => (
        <option value={option.optionValue} key={index}> {option.optionName} </option>
      ))}
    </select>
  );
});

Option.propTypes = {
  value: PropTypes.number,
  options: PropTypes.array,
  id: PropTypes.string,
  onChange: PropTypes.func,
};
