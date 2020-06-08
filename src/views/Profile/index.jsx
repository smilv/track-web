/*
 * @Description: 个人信息设置
 * @Autor: bin
 * @Date: 2020-05-18 16:38:20
 * @LastEditors: bin
 * @LastEditTime: 2020-06-08 19:07:11
 */
import React, { Component } from "react";
import { connect } from "react-redux";
import { Avatar, Form, Input, Button, Row, Col, DatePicker, Upload, message } from "antd";
import ImgCrop from "antd-img-crop";
import moment from "moment";
import lrz from "lrz";
import style from "./style.css";
import axios from "../../axios";
import { addUser } from "../../actions";

class Profile extends Component {
    state = {
        avatar: this.props.user.avatar
    };
    onFinish = values => {
        let birthday = values.birthday ? moment(values.birthday).valueOf() : null;
        axios
            .userUpdate({
                avatar: this.state.avatar,
                username: values.username,
                birthday: birthday
            })
            .then(response => {
                if (response.code == 200) {
                    message.success("更新成功");
                    // 发起添加用户信息action
                    this.props.dispatch(addUser(response.data));
                }
            });
    };
    // 出生日期不可选大于今天后的日期
    disabledDate(current) {
        return current && current > moment().endOf("day");
    }
    //本地上传图片
    beforeUpload = file => {
        const isJPG = file.type === "image/jpeg";
        const isPNG = file.type === "image/png";
        const isPic = isJPG || isPNG;
        if (!isPic) {
            message.error("图片类型必须是jpg,png中的一种");
            return false;
        }
        return new Promise((resolve, reject) => {
            lrz(file)
                .then(rst => {
                    // 将原文件的信息拷贝到上传文件信息里
                    let lrzFile = Object.assign(rst.file, {
                        lastModifiedDate: rst.origin.lastModifiedDate,
                        uid: rst.origin.uid,
                        name: rst.origin.name
                    });
                    const isLt5M = lrzFile.size / 1024 / 1024 < 5;
                    if (!isLt5M) {
                        message.error("上传失败，压缩后图片大于5M");
                        reject();
                    }
                    resolve(lrzFile);
                })
                .catch(function(err) {
                    reject();
                });
        });
    };
    //接口上传图片
    customRequest = option => {
        const formData = new FormData();
        formData.append("folder", "avatar");
        formData.append("file", option.file, option.file.name);
        axios.uploadImg(formData).then(response => {
            if (response.code == 200) {
                this.setState({
                    avatar: response.data
                });
            }
        });
    };
    render() {
        const { user } = this.props;
        return (
            <Row gutter={[32, 20]}>
                <Col span={10}>
                    <Form
                        layout="vertical"
                        className={style.form}
                        initialValues={{ birthday: user.birthday ? moment(user.birthday) : null }}
                        onFinish={this.onFinish}
                    >
                        <Form.Item className={style.avatar}>
                            <ImgCrop rotate>
                                <Upload showUploadList={false} customRequest={this.customRequest} beforeUpload={this.beforeUpload}>
                                    <Avatar size={180} className={style.avatarImg} src={`${_tuPath}${this.state.avatar}`} />
                                </Upload>
                            </ImgCrop>
                        </Form.Item>
                        <Form.Item
                            name="username"
                            label="昵称"
                            initialValue={user.username}
                            rules={[{ required: true, message: "请输入昵称!" }]}
                        >
                            <Input placeholder="输入昵称" />
                        </Form.Item>
                        <Form.Item name="birthday" label="出生日期">
                            <DatePicker style={{ width: "100%" }} disabledDate={this.disabledDate} />
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

const mapStateToProps = state => {
    return {
        user: state.user
    };
};

export default connect(mapStateToProps)(Profile);
