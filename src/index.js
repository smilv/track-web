/*
 * @Description: 主入口js
 * @Autor: bin
 * @Date: 2019-12-25 16:56:36
 * @LastEditors: bin
 * @LastEditTime: 2020-05-14 19:08:06
 */
import React from "react";
import ReactDOM from "react-dom";
import App from "./App.jsx";
import { ConfigProvider } from "antd";
import zhCN from "antd/es/locale/zh_CN";
import "moment/locale/zh-cn";
import "./global";
//只在开发环境引入Mock
// process.env.BUILD_TYPE === "dev" && require("./mock");
ReactDOM.render(
    <ConfigProvider locale={zhCN}>
        <App />
    </ConfigProvider>,
    document.getElementById("root")
);
