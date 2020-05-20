/*
 * @Description: 左侧导航-头像信息
 * @Autor: bin
 * @Date: 2020-04-23 14:18:26
 * @LastEditors: bin
 * @LastEditTime: 2020-05-20 17:20:00
 */
import React, { Component } from "react";
import { Avatar } from "antd";
import style from "./style.css";

class SliderAvatar extends Component {
    render() {
        return (
            <div className={style.container}>
                <Avatar size={80} src={`${_tuPath}${this.props.user.avatar}`} />
                <h3>{this.props.user.username}</h3>
                <p>管理员</p>
            </div>
        );
    }
}

export default SliderAvatar;
