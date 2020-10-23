import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { ItemEditor } from "./ItemEditor";
import * as serviceWorker from "./serviceWorker";
import { Title } from "./constants";

const onSave = function (e) {
  alert("Save");
};

const items = [{
  id: '1',
  name: 'first',
  fields: [{
    id: '1',
    fieldName: 'name',
    fieldType: 'text',
    fieldValue: 'value',
    fieldOptions: [{
      optionName: 'option name',
      optionValue: 0,
    }]
  }]
}];

ReactDOM.render(
  <React.StrictMode>
    <ItemEditor onSave={onSave} title={Title} items={items}/>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
