/*
 * @Description: 左侧导航-头像信息
 * @Autor: bin
 * @Date: 2020-04-23 14:18:26
 * @LastEditors: bin
 * @LastEditTime: 2020-05-06 17:51:40
 */
import React, { Component } from "react";
import { Avatar } from "antd";
import { UserOutlined } from "@ant-design/icons";
import style from "./style.css";

class SliderAvatar extends Component {
    render() {
        return (
            <div className={style.container}>
                <Avatar size={80} icon={<UserOutlined />} />
                <h3>蒙牛乳业</h3>
                <p>管理员</p>
            </div>
        );
    }
}

export default SliderAvatar;
