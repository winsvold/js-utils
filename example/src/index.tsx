import React from "react";
import ReactDOM from "react-dom";
import Dev from "./dev";
import { WinsvoldBaseCss } from "@winsvold/js-utils";

ReactDOM.render(
  <React.StrictMode>
    <WinsvoldBaseCss />
    <Dev />
  </React.StrictMode>,
  document.getElementById("root")
);
