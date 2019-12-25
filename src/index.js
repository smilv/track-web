import React from "react";
import ReactDOM from "react-dom";
import "./assets/css/reset.css";
import App from "./App.jsx";
//只在开发环境引入Mock
process.env.BUILD_TYPE === "dev" && require("./mock");
ReactDOM.render(<App />, document.getElementById("root"));
