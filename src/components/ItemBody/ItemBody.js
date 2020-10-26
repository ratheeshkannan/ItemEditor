import React from "react";
import PropTypes from "prop-types";
import { ItemSection } from "../ItemSection";
import { ItemContainer } from "../ItemContainer";
import "./ItemBody.css";

export const ItemBody = React.memo((props) => {
  const store = props.itemStore.getStore();

  return (
    <>
      <div className="itemBody">
        <nav className="itemSection">
          <h2>{props.title}</h2>
          <ItemSection
            items={store.items}
            selectedIndex={store.selectedIndex}
            openItem={props.itemStore.openItem}
          />
        </nav>
        <section className="itemContainer">
          <ItemContainer
            item={store.items[store.selectedIndex]}
            onChange={props.itemStore.onChange}
            itemStore={props.itemStore}
          />
        </section>
      </div>
    </>
  );
});

ItemBody.propTypes = {
  itemStore: PropTypes.object,
  title: PropTypes.string,
};
