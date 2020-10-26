import React from "react";
import PropTypes from "prop-types";
import { ActionButtons } from "../../collection/ActionButtons";
import "./ItemHeader.css";

export const ItemHeader = React.memo((props) => {
  const undoRedoButtonSettings = {
    primary: {
      value: "Undo",
      onClick: function(e){
        props.itemStore.onUndo();
      },
    },
    secondary: {
      value: "Redo",
      onClick: function(){
        props.itemStore.onRedo();
      },
    },
  };
  const saveCancelButtonSettings = {
      primary: {
        value:"Save",
        onClick: function(){
          props.itemStore.onSave();
        },
      },
      secondary: {
        value: "Cancel",
        onClick: function(){
          props.itemStore.onCancel();
        }
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
