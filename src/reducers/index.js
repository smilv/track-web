/*
 * @Description: 整合reducer; reducer: 为了描述 action 如何改变 state tree
 * @Autor: bin
 * @Date: 2020-05-19 16:54:02
 * @LastEditors: bin
 * @LastEditTime: 2020-05-19 17:24:02
 */
import { combineReducers } from "redux";
import user from "./user";

export default combineReducers({
    user
});
