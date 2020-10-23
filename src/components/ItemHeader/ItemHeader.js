import React from "react";
import PropTypes from "prop-types";
import { ActionButtons } from "../../collection/ActionButtons";
import "./ItemHeader.css";

export const ItemHeader = React.memo((props) => {
  const undoRedoButtonSettings = {
    primary: {
      value: "Undo",
      onClick: function(e){
          alert('Undo');
      },
    },
    secondary: {
      value: "Redo",
      onClick: function(){
          alert('Redo');
      },
    },
  };
  const saveCancelButtonSettings = {
      primary: {
        value:"Save",
        onClick: function(){
            props.onSave();
        },
      },
      secondary: {
        value: "Cancel",
        onClick: function(){
            alert('cancel');
        }
      },
  }

  return (
    <header className="itemHeader">
      <h1 className="heading">Item Editor</h1>
      <section className="buttonsContainer">
        <ActionButtons settings={undoRedoButtonSettings} />
        <ActionButtons settings={saveCancelButtonSettings} />
      </section>
    </header>
  );
});

ItemHeader.propTypes = {
    onSave: PropTypes.func,
}
