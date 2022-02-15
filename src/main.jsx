import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { StateContext } from "./context/AppContext";

ReactDOM.render(
  <React.StrictMode>
    <StateContext>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </StateContext>
  </React.StrictMode>,
  document.getElementById("root")
);
