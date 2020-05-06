/**
 * 登录、注册页
 * bin 2020/4/22
 */
import React, { Component } from "react";
import style from "./style.css";
import LoginComponent from "../../components/Login";
import RegisterComponent from "../../components/Register";

class Login extends Component {
    state = {
        component: 1 //1：登录，2：注册
    };
    switch = component => {
        this.setState({ component });
    };
    render() {
        return (
            <div className={style.wrapper}>
                <div className={style.mainBox}>
                    {this.state.component == 1 && (
                        <div>
                            <LoginComponent />
                            <div className={style.switch}>
                                没有帐号？<a onClick={this.switch.bind(this, 2)}>创建一个</a>
                            </div>
                        </div>
                    )}
                    {this.state.component == 2 && (
                        <div>
                            <RegisterComponent />
                            <div className={style.switch}>
                                已有帐号，<a onClick={this.switch.bind(this, 1)}>去登录</a>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        );
    }
}

export default Login;
