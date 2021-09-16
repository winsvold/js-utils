import React from "react";
import ReactDOM from "react-dom";
import Dev from "./dev";
import { BiblioteksentralenBaseCss } from "@biblioteksentralen/js-utils";

ReactDOM.render(
  <React.StrictMode>
    <BiblioteksentralenBaseCss />
    <Dev />
  </React.StrictMode>,
  document.getElementById("root")
);
