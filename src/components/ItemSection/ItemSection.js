import React from "react";
import PropTypes from "prop-types";
import "./ItemSection.css";

export const ItemSection = React.memo((props) => {
  return (
    <div className="ItemSection">
      <ul>
        {props.items.map((item) => (
          <li
            id={item.id}
            onClick={props.openItem}
            className={item.id === props.selectedItem ? "selected" : ""}
            key={item.id}
          >
            {item.name}
          </li>
        ))}
      </ul>
    </div>
  );
});

ItemSection.propTypes = {
  items: PropTypes.array,
  openItem: PropTypes.func,
};
