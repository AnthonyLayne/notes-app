import { StrictMode } from "react";
import { render as ReactDomRender } from "react-dom";

import App from "./App";

import "./index.css";

ReactDomRender(
  <StrictMode>
    <App />
  </StrictMode>,
  document.getElementById("root")
);
