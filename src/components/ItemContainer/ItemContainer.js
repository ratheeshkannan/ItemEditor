import React from "react";
import PropTypes from "prop-types";
import { Label } from "../../common/Label";
import { Toggle } from "../../common/Toggle";
import { Text } from "../../common/Text";
import { Option } from "../../common/Option";
import "./ItemContainer.css";

export const ItemContainer = React.memo((props) => {
  const fields = props.item || [];
  return (
    <div className="ItemContainer">
      {fields.map((item) =>
        item.fieldType === "toggle" ? (
          <div>
            <Toggle value={item.fieldValue} />
            <Label value={item.fieldName} />
          </div>
        ) : item.fieldType === "text" ? (
          <div>
            <div>
              <Label value={item.fieldName} />
            </div>
            <div>
              <Text value={item.fieldValue} />
            </div>
          </div>
        ) : (
          <div>
            <div>
              <Label value={item.fieldName} />
            </div>
            <div>
              <Option value={item.fieldValue} options={item.fieldOptions} />
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
