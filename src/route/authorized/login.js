/*
 * @Description: 登录拦截
 * @Autor: bin
 * @Date: 2020-05-14 15:48:54
 * @LastEditors: bin
 * @LastEditTime: 2020-06-16 14:36:05
 */

import React, { Component } from "react";
import axios from "../../axios";
import { addUser } from "../../actions";

export default (Comp, dispatch) => {
    return class ConvertComp extends Component {
        state = {
            login: false
        };
        componentDidMount() {
            axios.userInfo().then(response => {
                //登录状态返回用户信息
                if (response.code == 200) {
                    // 发起添加用户信息action
                    dispatch(addUser(response.data));
                    this.setState({
                        login: true
                    });
                } else {
                    //未登录跳转登录
                    window.location.href = `/login?url=${encodeURIComponent(window.location.href)}`;
                }
            });
        }

        render() {
            if (this.state.login) {
                return <Comp {...this.props} />;
            } else {
                return null;
            }
        }
    };
};
