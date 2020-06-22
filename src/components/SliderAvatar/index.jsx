/*
 * @Description: 左侧导航-头像信息
 * @Autor: bin
 * @Date: 2020-04-23 14:18:26
 * @LastEditors: bin
 * @LastEditTime: 2020-06-22 17:24:02
 */
import React, { Component } from "react";
import { Avatar } from "antd";
import style from "./style.css";

class SliderAvatar extends Component {
    render() {
        return (
            <div className={style.container}>
                {this.props.user.isBirthday && <img className={style.crown} src={require("../../assets/img/crown.png")} alt="" />}
                <Avatar size={80} src={`${_tuPath}${this.props.user.avatar}`} />
                <h3>{this.props.user.username}</h3>
                <p>管理员</p>
            </div>
        );
    }
}

export default SliderAvatar;
