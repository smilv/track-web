/*
 * @Description: 注册模块
 * @Autor: bin
 * @Date: 2020-05-06 16:03:33
 * @LastEditors: bin
 * @LastEditTime: 2021-05-31 19:58:44
 */
import React, { Component } from "react";
import style from "./style.css";
import { Form, Input, Button, message } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import axios from "../../axios";
import regex from "../../utils/regex";

class Register extends Component {
    onFinish = values => {
        axios
            .register({
                mobile: values.mobile,
                password: values.password
            })
            .then(
                response => {
                    // 注册成功去登录
                    message.success("注册成功", 2, () => {
                        this.login(values);
                    });
                },
                error => {
                    console.log(error);
                }
            );
    };
    login = values => {
        axios
            .login({
                mobile: values.mobile,
                password: values.password
            })
            .then(response => {
                if (response.code == 200) {
                    window.location.href = "/";
                }
            });
    };
    render() {
        return (
            <div>
                <h3 className={style.title}>注册</h3>
                <Form name="normal_login" className="login-form" onFinish={this.onFinish}>
                    <Form.Item name="mobile" rules={[{ pattern: regex.mobile, required: true, message: "请输入手机号!" }]}>
                        <Input
                            size="large"
                            prefix={<UserOutlined className="site-form-item-icon" />}
                            placeholder="手机号"
                            autoComplete="new-password"
                        />
                    </Form.Item>
                    <Form.Item
                        name="password"
                        rules={[{ pattern: regex.password, required: true, message: "请输入数字、字母组成的6-20位密码!" }]}
                    >
                        <Input
                            size="large"
                            prefix={<LockOutlined className="site-form-item-icon" />}
                            type="password"
                            placeholder="密码"
                            autoComplete="new-password"
                        />
                    </Form.Item>
                    <Form.Item
                        name="confirmPassword"
                        dependencies={["password"]}
                        rules={[
                            { required: true, message: "请确认密码!" },
                            ({ getFieldValue }) => ({
                                validator(rule, value) {
                                    if (!value || getFieldValue("password") === value) {
                                        return Promise.resolve();
                                    }
                                    return Promise.reject("两次密码输入不一致!");
                                }
                            })
                        ]}
                    >
                        <Input
                            size="large"
                            prefix={<LockOutlined className="site-form-item-icon" />}
                            type="password"
                            placeholder="确认密码"
                        />
                    </Form.Item>
                    <Form.Item>
                        <Button type="primary" htmlType="submit" size="large" className={style.button}>
                            注册
                        </Button>
                    </Form.Item>
                </Form>
            </div>
        );
    }
}

export default Register;
