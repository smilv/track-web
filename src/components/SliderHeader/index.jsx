/**
 * 顶部导航
 * bin 2020/4/23
 */
import React, { Component } from "react";
import style from "./style.css";
import { Menu, Dropdown, Avatar } from "antd";
import { DownOutlined, LogoutOutlined, SettingOutlined, UserOutlined } from "@ant-design/icons";

class SliderHeader extends Component {
    render() {
        const menu = (
            <Menu className={style.menu}>
                <Menu.Item>
                    <SettingOutlined />
                    个人设置
                </Menu.Item>
                <Menu.Item>
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
                            <Avatar size={30} icon={<UserOutlined />} />
                            <span className={style.name}>蒙牛乳业</span>
                            <DownOutlined />
                        </div>
                    </Dropdown>
                </div>
            </div>
        );
    }
}

export default SliderHeader;
