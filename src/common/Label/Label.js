import React from "react";
import PropTypes from "prop-types";
import "./Label.css";

export const Label = React.memo((props) => {
  const { value, id } = props;
  return (
    <label className="label" for={id}>
      {value}
    </label>
  );
});

Label.propTypes = {
  settings: PropTypes.object,
};
