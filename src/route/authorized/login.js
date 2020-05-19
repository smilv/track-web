/*
 * @Description: 登录拦截
 * @Autor: bin
 * @Date: 2020-05-14 15:48:54
 * @LastEditors: bin
 * @LastEditTime: 2020-05-19 18:43:50
 */

import React, { Component } from "react";
import { connect } from "react-redux";
import axios from "../../axios";
import { addUser } from "../../actions";

const Login = Comp => {
    return class ConvertComp extends Component {
        state = {
            login: false
        };
        componentDidMount() {
            axios.userInfo().then(response => {
                //登录状态返回用户信息
                if (response.code == 200) {
                    this.setState({
                        login: true
                    });
                } else {
                    //未登录跳转登录
                    window.location.href = "/login";
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
export default connect()(Login);
