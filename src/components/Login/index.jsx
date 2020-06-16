/*
 * @Description: 登录模块
 * @Autor: bin
 * @Date: 2020-05-06 14:31:33
 * @LastEditors: bin
 * @LastEditTime: 2020-06-16 14:32:24
 */
import React, { Component } from "react";
import style from "./style.css";
import { Form, Input, Button } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import axios from "../../axios";
import regex from "../../utils/regex";
import tools from "../../utils/tools";

class Login extends Component {
    state = {
        errorMsg: null //登录错误提示
    };
    onFinish = values => {
        axios
            .login({
                mobile: values.mobile,
                password: values.password
            })
            .then(response => {
                if (response.code == 200) {
                    window.location.href = tools.getUrlParam("url") || "/";
                } else if (response.code == 5004) {
                    //用户不存在
                    this.setState({
                        errorMsg: "用户不存在，请重新输入！"
                    });
                } else if (response.code == 5005) {
                    //密码错误
                    this.setState({
                        errorMsg: "密码错误，请重新输入！"
                    });
                }
            });
    };
    render() {
        return (
            <div>
                <h3 className={style.title}>登录</h3>
                <div className={style.error}>{this.state.errorMsg}</div>
                <Form name="normal_login" className="login-form" initialValues={{ remember: true }} onFinish={this.onFinish}>
                    <Form.Item name="mobile" rules={[{ pattern: regex.mobile, required: true, message: "请输入手机号!" }]}>
                        <Input size="large" prefix={<UserOutlined className="site-form-item-icon" />} placeholder="手机号" />
                    </Form.Item>
                    <Form.Item
                        name="password"
                        rules={[{ pattern: regex.password, required: true, message: "请输入数字、字母组成的6-20位密码!" }]}
                    >
                        <Input size="large" prefix={<LockOutlined className="site-form-item-icon" />} type="password" placeholder="密码" />
                    </Form.Item>
                    <Form.Item>
                        <Button type="primary" htmlType="submit" size="large" className={style.button}>
                            登录
                        </Button>
                    </Form.Item>
                </Form>
            </div>
        );
    }
}

export default Login;
