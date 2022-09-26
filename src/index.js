import React from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.css";
import "./index.css";
import { Context } from "./Components/Context";
import { BrowserRouter } from "react-router-dom";
import App from "./App";

ReactDOM.render(
  <React.StrictMode>
    <Context>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Context>
  </React.StrictMode>,
  document.getElementById("root")
);
