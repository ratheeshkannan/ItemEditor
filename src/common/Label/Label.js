import React from "react";
import PropTypes from "prop-types";
import "./Label.css";

export const Label = React.memo((props) => {
  const { value } = props;
  return (
    <label className="label">
      {value}
    </label>
  );
});

Label.propTypes = {
  settings: PropTypes.object,
};
