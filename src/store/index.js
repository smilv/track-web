/*
 * @Description: store
 * @Autor: bin
 * @Date: 2020-05-22 15:37:40
 * @LastEditors: bin
 * @LastEditTime: 2020-05-22 15:53:14
 */

import { createStore, applyMiddleware } from "redux";
import logger from "redux-logger"; //打印日志的中间件
import rootReducer from "../reducers";

export default createStore(rootReducer, applyMiddleware(logger));
