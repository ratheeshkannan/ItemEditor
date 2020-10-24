import React from "react";
import PropTypes from "prop-types";
import "./ItemSection.css";

export const ItemSection = React.memo((props) => {
  return (
    <div className="itemInnerSection">
      <ul>
        {props.items.map((item, index) => (
          <li
            id={item.id}
            onClick={props.openItem}
            className={
              item.id === props.items[props.selectedIndex].id ? "selected" : ""
            }
            key={index}
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
