/*
 * @Description: 左侧导航-头像信息
 * @Autor: bin
 * @Date: 2020-04-23 14:18:26
 * @LastEditors: bin
 * @LastEditTime: 2020-05-18 16:27:32
 */
import React, { Component } from "react";
import { Avatar } from "antd";
import { UserOutlined } from "@ant-design/icons";
import style from "./style.css";

class SliderAvatar extends Component {
    render() {
        return (
            <div className={style.container}>
                <Avatar size={80} src={`${_tuPath}${global.state.user.avatar}`} />
                <h3>{global.state.user.username}</h3>
                <p>管理员</p>
            </div>
        );
    }
}

export default SliderAvatar;
