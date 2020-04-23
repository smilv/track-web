/**
 * 左侧导航-头像信息
 * bin 2020/4/23
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
