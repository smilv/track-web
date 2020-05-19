/*
 * @Description: 个人信息设置
 * @Autor: bin
 * @Date: 2020-05-18 16:38:20
 * @LastEditors: bin
 * @LastEditTime: 2020-05-19 14:56:54
 */
import React, { Component } from "react";
import { Avatar, Form, Input, Button, Row, Col, DatePicker } from "antd";
import style from "./style.css";

class Profile extends Component {
    onFinish = values => {
        console.log(values);
    };
    render() {
        return (
            <Row gutter={[32, 20]}>
                <Col span={10}>
                    <Form layout="vertical" className={style.form} onFinish={this.onFinish}>
                        <Form.Item className={style.avatar}>
                            <Avatar size={180} src={`${_tuPath}${global.state.user.avatar}`} />
                        </Form.Item>
                        <Form.Item
                            name="username"
                            label="昵称"
                            initialValue={global.state.user.username}
                            rules={[{ required: true, message: "请输入昵称!" }]}
                        >
                            <Input placeholder="输入昵称" />
                        </Form.Item>
                        <Form.Item name="birthday" label="出生日期">
                            <DatePicker style={{ width: "100%" }} />
                        </Form.Item>
                        <Form.Item>
                            <Button type="primary" htmlType="submit" block>
                                更新
                            </Button>
                        </Form.Item>
                    </Form>
                </Col>
            </Row>
        );
    }
}

export default Profile;
