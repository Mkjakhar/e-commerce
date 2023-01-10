import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import Context from "./context/Context";

ReactDOM.render(
  <BrowserRouter>
    <React.StrictMode>
      <Context>
        <App />
      </Context>
    </React.StrictMode>
  </BrowserRouter>,
  document.getElementById("root")
);
reportWebVitals();
