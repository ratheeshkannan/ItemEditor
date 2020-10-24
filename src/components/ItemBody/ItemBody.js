import React from "react";
import PropTypes from "prop-types";
import { ItemSection } from "../ItemSection";
import { ItemContainer } from "../ItemContainer";
import "./ItemBody.css";

export const ItemBody = React.memo((props) => {
  return (
    <div className="itemBody">
      <section className="itemSection">
        <ItemSection
          items={props.store.items}
          selectedIndex={props.store.selectedIndex}
          openItem={props.openItem}
        />
      </section>
      <aside className="itemContainer">
        <ItemContainer
          item={props.store.items[props.store.selectedIndex]}
          onChange={props.onChange}
        />
      </aside>
    </div>
  );
});

ItemBody.propTypes = {
  items: PropTypes.array,
};
