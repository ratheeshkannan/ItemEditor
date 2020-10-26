import { useState } from "react";

export const ItemStore = (items) => {
  const [store, setStore] = useState({
    items: items,
    selectedIndex: 0,
    historyItems: {
      initialitems: items,
      undo: false,
      history: 0,
    },
  });

  return {
    getStore: function () {
      return store;
    },
    openItem: function (e) {
      const itemId = e.target.id;
      const selectedIndex = store.items.findIndex((item) => item.id === itemId);
      const tempStore = JSON.parse(JSON.stringify(store));

      tempStore.historyItems.history = store.selectedIndex;
      tempStore.selectedIndex = selectedIndex;
      setStore(tempStore);
    },
    onUndoRedo: function (tempStore, flag) {
      if (typeof tempStore.historyItems.history === "number") {
        tempStore.selectedIndex = store.historyItems.history;
        tempStore.historyItems.history = store.selectedIndex;
      } else {
        tempStore.items = store.historyItems.history;
        tempStore.historyItems.history = store.items;
      }
      tempStore.historyItems.undo = flag;

      setStore(tempStore);
    },
    onUndo: function () {
      const tempStore = JSON.parse(JSON.stringify(store));

      if (!tempStore.historyItems.undo) {
        this.onUndoRedo(tempStore, true);
      }
    },
    onRedo: function () {
      const tempStore = JSON.parse(JSON.stringify(store));

      if (tempStore.historyItems.undo) {
        this.onUndoRedo(tempStore, false);
      }
    },
    onSave: function (e) {
      alert(JSON.stringify(store.items));
    },
    onCancel: function () {
      const tempStore = JSON.parse(JSON.stringify(store));

      tempStore.items = store.historyItems.initialitems;
      tempStore.selectedIndex = 0;
      tempStore.historyItems.history = 0;
      tempStore.historyItems.undo = false;
      setStore(tempStore);
    },
    onChange: function (e) {
      let tempStore = JSON.parse(JSON.stringify(store));
      const currentItems = store.items;
      const selectedId = e.target.id;
      const type = e.target.type;
      const selectedValue =
        type === "checkbox"
          ? e.target.checked
          : type === "select-one"
          ? parseInt(e.target.value, 10)
          : e.target.value;
      const selectedStoreIndex = tempStore.selectedIndex;
      const selectedStateIndex = tempStore.items[
        selectedStoreIndex
      ].fields.findIndex((item) => item.id === selectedId);

      tempStore.historyItems.history = currentItems;
      tempStore.items[selectedStoreIndex].fields[
        selectedStateIndex
      ].fieldValue = selectedValue;
      setStore(tempStore);
    },
  };
};
