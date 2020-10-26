import React from "react";
import PropTypes from "prop-types";
import { ItemBody } from "./components/ItemBody";
import { ItemStore } from "./store";
import "./ItemEditor.css";

export const ItemEditor = React.memo((props) => {
  const itemStore = ItemStore(props.items);

  return (
    <div className="itemEditor">
      <ItemBody itemStore={itemStore} title={props.title}/>
    </div>
  );
});

ItemEditor.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      name: PropTypes.string,
      fields: PropTypes.arrayOf(
        PropTypes.shape({
          id: PropTypes.string,
          fieldName: PropTypes.string,
          fieldType: PropTypes.oneOf(["text", "option", "toggle"]),
          fieldValue: PropTypes.oneOfType([
            PropTypes.string,
            PropTypes.number,
            PropTypes.bool,
          ]),
          fieldOptions: PropTypes.arrayOf(
            PropTypes.shape({
              optionName: PropTypes.string,
              optionValue: PropTypes.number,
            })
          ),
        })
      ),
    })
  ),
  onSave: PropTypes.func, // one parameter: "items", as described above
  title: PropTypes.string,
};
