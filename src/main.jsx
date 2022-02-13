import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import StateContext from "./context/AppContext";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <StateContext>
        <App />
      </StateContext>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
