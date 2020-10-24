import React from "react";
import PropTypes from "prop-types";
import { Label } from "../../common/Label";
import { Toggle } from "../../common/Toggle";
import { Text } from "../../common/Text";
import { Option } from "../../common/Option";
import "./ItemContainer.css";

export const ItemContainer = React.memo((props) => {
  const fields = props.item.fields || [];

  return (
    <div className="itemInnerContainer">
      {fields.map((item, index) =>
        item.fieldType === "toggle" ? (
          <div className="itemContent" key={index}>
            <Toggle value={item.fieldValue} id={item.id} onChange={props.onChange}/>
            <Label value={item.fieldName} id={item.id}/>
          </div>
        ) : item.fieldType === "text" ? (
          <div className="itemContent" key={index}>
            <div>
              <Label value={item.fieldName} id={item.id}/>
            </div>
            <div>
              <Text value={item.fieldValue} id={item.id} onChange={props.onChange}/>
            </div>
          </div>
        ) : (
          <div className="itemContent" key={index}>
            <div>
              <Label value={item.fieldName} id={item.id}/>
            </div>
            <div>
              <Option value={item.fieldValue} options={item.fieldOptions} id={item.id} onChange={props.onChange}/>
            </div>
          </div>
        )
      )}
    </div>
  );
});

ItemContainer.propTypes = {
  item: PropTypes.array,
};
