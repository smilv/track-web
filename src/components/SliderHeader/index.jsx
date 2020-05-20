/*
 * @Description: 顶部导航
 * @Autor: bin
 * @Date: 2020-04-23 15:48:38
 * @LastEditors: bin
 * @LastEditTime: 2020-05-20 17:02:16
 */
import React, { Component } from "react";
import style from "./style.css";
import { Menu, Dropdown, Avatar, message } from "antd";
import { DownOutlined, LogoutOutlined, SettingOutlined } from "@ant-design/icons";
import axios from "../../axios";

class SliderHeader extends Component {
    /**
     * @description: 退出登录
     */
    logout = () => {
        axios.logout().then(response => {
            if (response.code == 200) {
                message.success("退出成功", 1, () => {
                    window.location.href = "/login";
                });
            } else {
                message.success("退出失败");
            }
        });
    };
    /**
     * @description: 跳转设置个人信息
     */
    toProfile = () => {
        window.location.href = "/profile";
    };
    render() {
        const menu = (
            <Menu className={style.menu}>
                <Menu.Item onClick={this.toProfile}>
                    <SettingOutlined />
                    个人设置
                </Menu.Item>
                <Menu.Item onClick={this.logout}>
                    <LogoutOutlined />
                    退出登录
                </Menu.Item>
            </Menu>
        );
        return (
            <div className={style.container}>
                <div>
                    <Dropdown overlay={menu}>
                        <div className={style.dropdownLink}>
                            <Avatar size={30} src={`${_tuPath}${this.props.user.avatar}`} />
                            <span className={style.name}>{this.props.user.username}</span>
                            <DownOutlined />
                        </div>
                    </Dropdown>
                </div>
            </div>
        );
    }
}

export default SliderHeader;
