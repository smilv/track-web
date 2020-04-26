import React from "react";
import ReactDOM from "react-dom";
import App from "./App.jsx";
import { ConfigProvider } from "antd";
import zhCN from "antd/es/locale/zh_CN";
import "moment/locale/zh-cn";
//只在开发环境引入Mock
process.env.BUILD_TYPE === "dev" && require("./mock");
ReactDOM.render(
    <ConfigProvider locale={zhCN}>
        <App />
    </ConfigProvider>,
    document.getElementById("root")
);
