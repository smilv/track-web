/*
 * @Description: 登录拦截
 * @Autor: bin
 * @Date: 2019-12-25 17:13:47
 * @LastEditors: bin
 * @LastEditTime: 2020-05-06 17:49:16
 */
import React, { Component } from "react";
import axios from "../axios";
export default Comp => {
    return class ConvertComp extends Component {
        constructor() {
            super();
            this.state = {
                login: false
            };
        }
        componentDidMount() {
            axios.validateUser().then(res => {
                console.log(res);
                if (res.code == 200) {
                    this.setState({
                        login: true
                    });
                } else {
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
