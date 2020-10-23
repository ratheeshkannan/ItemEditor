import React from "react";
import PropTypes from "prop-types";
import "./ItemBody.css";

export const ItemBody = React.memo((props) => {
  return <div className="ItemBody"></div>;
});

ItemBody.propTypes = {
    items: PropTypes.array,
};
