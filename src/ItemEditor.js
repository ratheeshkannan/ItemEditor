import React from "react";
import PropTypes from "prop-types";
import { ItemHeader } from "./components/ItemHeader";
import { ItemBody } from "./components/ItemBody";
import "./ItemEditor.css";

export const ItemEditor = React.memo((props) => {
  return (
    <div className="ItemEditor">
      <ItemHeader onSave={props.onSave} title={props.title}/>
      <ItemBody items={props.items} />
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
