/*
 * @Description: 个人信息设置
 * @Autor: bin
 * @Date: 2020-05-18 16:38:20
 * @LastEditors: bin
 * @LastEditTime: 2020-05-18 18:29:47
 */
import React, { Component } from "react";
import { Avatar, Form, Input, Button, Row, Col } from "antd";
import style from "./style.css";

class Profile extends Component {
    render() {
        return (
            <Row>
                <Col span={8}>
                    <Form layout="vertical" className={style.form}>
                        <Form.Item className={style.avatar}>
                            <Avatar size={180} src={`${_tuPath}${global.state.user.avatar}`} />
                        </Form.Item>
                        <Form.Item label="昵称">
                            <Input placeholder="输入昵称" />
                        </Form.Item>
                        <Form.Item label="出生日期">
                            <Input placeholder="出生日期" />
                        </Form.Item>
                        <Form.Item>
                            <Button type="primary" block>
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
