/*
 * @Description: 注册模块
 * @Autor: bin
 * @Date: 2020-05-06 16:03:33
 * @LastEditors: bin
 * @LastEditTime: 2020-05-14 15:27:32
 */
import React, { Component } from "react";
import style from "./style.css";
import { Form, Input, Button } from "antd";
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
                    console.log(response);
                },
                error => {
                    console.log(error);
                }
            );
    };
    render() {
        return (
            <div>
                <h3 className={style.title}>注册</h3>
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
                            注册
                        </Button>
                    </Form.Item>
                </Form>
            </div>
        );
    }
}

export default Register;
