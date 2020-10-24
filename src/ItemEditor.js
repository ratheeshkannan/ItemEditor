import React, { useState } from "react";
import PropTypes from "prop-types";
import { ItemHeader } from "./components/ItemHeader";
import { ItemBody } from "./components/ItemBody";
import "./ItemEditor.css";

export const ItemEditor = React.memo((props) => {
  const [store, setStore] = useState({
    items: props.items,
    selectedIndex: 0,
    historyItems: [],
  });

  const openItem = function (e) {
    const itemId = e.target.id;
    const selectedIndex = store.items.findIndex((item) => item.id === itemId);
    const tempStore = { ...store };

    tempStore.selectedIndex = selectedIndex;
    setStore(tempStore);
  };

  const onSave = function (e) {
    alert(JSON.stringify(store.items));
  };

  const onChange = function (e) {
    const selectedId = e.target.id;
    const selectedValue =
      e.target.type === "checkbox" ? e.target.checked : e.target.value;
    const selectedStoreIndex = store.selectedIndex;
    const selectedStateIndex = store.items[selectedStoreIndex].fields.findIndex(
      (item) => item.id === selectedId
    );
    let tempStore = { ...store };

    tempStore.items[selectedStoreIndex].fields[
      selectedStateIndex
    ].fieldValue = selectedValue;
    setStore(tempStore);
  };

  return (
    <div className="ItemEditor">
      <ItemHeader
        onSave={onSave}
        store={store}
        setStore={setStore}
        title={props.title}
      />
      <ItemBody store={store} openItem={openItem} onChange={onChange} />
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
