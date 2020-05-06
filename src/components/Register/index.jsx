/**
 * 注册模块
 * bin 2020/5/6
 */
import React, { Component } from "react";
import style from "./style.css";
import { Form, Input, Button } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";

class Register extends Component {
    onFinish = values => {
        console.log(values);
    };
    render() {
        return (
            <div>
                <h3 className={style.title}>注册</h3>
                <Form name="normal_login" className="login-form" initialValues={{ remember: true }} onFinish={this.onFinish}>
                    <Form.Item name="username" rules={[{ pattern: /^1[\d]{10}$/, required: true, message: "请输入手机号!" }]}>
                        <Input size="large" prefix={<UserOutlined className="site-form-item-icon" />} placeholder="手机号" />
                    </Form.Item>
                    <Form.Item
                        name="password"
                        rules={[{ pattern: /^[0-9A-Za-z]{6,20}$/, required: true, message: "请输入数字、字母组成的6-20位密码!" }]}
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
