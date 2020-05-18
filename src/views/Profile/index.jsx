/*
 * @Description: 个人信息设置
 * @Autor: bin
 * @Date: 2020-05-18 16:38:20
 * @LastEditors: bin
 * @LastEditTime: 2020-05-18 20:01:02
 */
import React, { Component } from "react";
import { Avatar, Form, Input, Button, Row, Col, DatePicker } from "antd";
import style from "./style.css";

class Profile extends Component {
    render() {
        return (
            <Row gutter={[32, 20]}>
                <Col span={10}>
                    <Form layout="vertical" className={style.form}>
                        <Form.Item className={style.avatar}>
                            <Avatar size={180} src={`${_tuPath}${global.state.user.avatar}`} />
                        </Form.Item>
                        <Form.Item label="昵称">
                            <Input placeholder="输入昵称" />
                        </Form.Item>
                        <Form.Item label="出生日期">
                            <DatePicker style={{ width: "100%" }} />
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
