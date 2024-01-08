import React, { createContext } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import UserStore from "./store/UserStore";
import DeviceStore from "./store/DeviceStore";
// import config from "config";
// import "dotenv/config";
// require("dotenv").config();

export const Context = createContext(null);
console.log(process.env.REACT_APP_API_URL);
// process.env.REACT_APP_API_URL

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Context.Provider
    value={{ user: new UserStore(), device: new DeviceStore() }}
  >
    <App />
  </Context.Provider>
);
