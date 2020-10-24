import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { ItemEditor } from "./ItemEditor";
import * as serviceWorker from "./serviceWorker";
import { Title } from "./constants";
import { Mock } from "./mock/Mock"

ReactDOM.render(
  <React.StrictMode>
    <ItemEditor title={Title} items={Mock}/>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
