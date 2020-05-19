/*
 * @Description: 主入口js
 * @Autor: bin
 * @Date: 2019-12-25 16:56:36
 * @LastEditors: bin
 * @LastEditTime: 2020-05-19 18:14:07
 */
import React from "react";
import ReactDOM from "react-dom";
import App from "./App.jsx";
import { ConfigProvider } from "antd";
import zhCN from "antd/es/locale/zh_CN";
import "moment/locale/zh-cn";
import { createStore } from "redux";
import { Provider } from "react-redux";
import rootReducer from "./reducers";
const store = createStore(rootReducer);
//只在开发环境引入Mock
// process.env.BUILD_TYPE === "dev" && require("./mock");
ReactDOM.render(
    <Provider store={store}>
        <ConfigProvider locale={zhCN}>
            <App />
        </ConfigProvider>
    </Provider>,
    document.getElementById("root")
);
