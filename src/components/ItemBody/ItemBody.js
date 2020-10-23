import React, { useState } from "react";
import PropTypes from "prop-types";
import { ItemSection } from '../ItemSection';
import { ItemContainer } from '../ItemContainer';
import "./ItemBody.css";

export const ItemBody = React.memo((props) => {
  const itemsData = [...props.items];
  const defaultId = itemsData[0].id;
  const defaultData = itemsData[0].fields;
  const [state, setState] = useState({
    selectedItem: defaultId,
    selectedData: defaultData,
  });
  const openItem = function(e){
    const itemId = e.target.id;
    const itemData = itemsData.filter((item) => item.id === itemId);
    setState({
      selectedItem: itemId,
      selectedData: itemData[0].fields,
    });
  };

  /*
  state : {
    selectedItem: '0',
    selectedData: {},
  }
  */

  return <div className="ItemBody">
    <section>
      <ItemSection items={props.items} selectedItem={state.selectedItem} openItem={openItem}/>
    </section>
    <aside> 
      <ItemContainer item={state.selectedData}/>
    </aside>
  </div>;
});

ItemBody.propTypes = {
    items: PropTypes.array,
};
