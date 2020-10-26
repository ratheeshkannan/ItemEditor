import React from "react";
import PropTypes from "prop-types";
import { ActionButtons } from "../../collection/ActionButtons";
import "./ItemHeader.css";

export const ItemHeader = React.memo((props) => {
  const store = props.itemStore.getStore();
  const undoRedoButtonSettings = {
    primary: {
      value: "Undo",
      onClick: function(e){
        props.itemStore.onUndo();
      },
      disabled: store.historyItems.undo,
      icon: 'undo',
    },
    secondary: {
      value: "Redo",
      onClick: function(){
        props.itemStore.onRedo();
      },      
      disabled: !store.historyItems.undo,
      icon: 'redo',
    },
  };
  const saveCancelButtonSettings = {
      primary: {
        value:"Save",
        onClick: function(){
          props.itemStore.onSave();
        },
        icon: 'save',
        style: {backgroundColor: 'green'}
      },
      secondary: {
        value: "Cancel",
        onClick: function(){
          props.itemStore.onCancel();
        },
        icon: 'clear',
        style: {backgroundColor: 'red'}
      },
  }

  return (
    <header className="itemHeader">
      <section className="buttonsContainer">
        <ActionButtons settings={undoRedoButtonSettings} />
        <ActionButtons settings={saveCancelButtonSettings} />
      </section>
    </header>
  );
});

ItemHeader.propTypes = {
    onSave: PropTypes.func,
    title: PropTypes.string,
}
