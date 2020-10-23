import React from "react";
import PropTypes from "prop-types";
import "./Text.css";

export const Text = React.memo((props) => {
  const { value, id } = props;
  return (
    <input type="text" value={value} id={id} />
  );
});

Text.propTypes = {
  value: PropTypes.string,
  id: PropTypes.string,
};
