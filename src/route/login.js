// bin 2019/12/25
// 登录拦截
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
            //选配 验证路由（全连接） 默认为当前路由
            // let returnUrl = encodeURI(window.location.href);
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
