import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { Provider } from "react-redux";
import calcStore from './store/index.js';

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={calcStore}>
      <App />
    </Provider>
  </React.StrictMode>
);
