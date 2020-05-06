/*
 * @Description: 主页面框架
 * @Autor: bin
 * @Date: 2020-04-22 18:22:44
 * @LastEditors: bin
 * @LastEditTime: 2020-05-06 17:48:30
 */
import React, { Component } from "react";
import { Route, NavLink } from "react-router-dom";
import { Layout, Menu } from "antd";
import style from "./style.css";
import route from "../../route";
import SliderAvatar from "../../components/SliderAvatar";
import SliderHeader from "../../components/SliderHeader";

const { Header, Content, Sider, Footer } = Layout;

class Index extends Component {
    constructor(props) {
        super(props);
        this.state = {
            //默认选中菜单
            current: this.props.location.pathname
        };
    }
    render() {
        return (
            <Layout>
                <Sider className={style.slider}>
                    <SliderAvatar />
                    <Menu onClick={this.handleClick} defaultSelectedKeys={[this.state.current]} className={style.menu} mode="inline">
                        {route.map((item, key) => {
                            return (
                                <Menu.Item key={item.path}>
                                    {item.icon}
                                    <NavLink to={item.path}>{item.name}</NavLink>
                                </Menu.Item>
                            );
                        })}
                    </Menu>
                </Sider>
                <Layout className={style.siteLayout}>
                    <Header className={style.header}>
                        <SliderHeader />
                    </Header>
                    <Content className={style.content}>
                        {route.map((item, key) => {
                            return <Route key={key} path={item.path} exact component={item.component} />;
                        })}
                    </Content>
                    <Footer style={{ textAlign: "center" }}>Created by bin</Footer>
                </Layout>
            </Layout>
        );
    }
}

export default Index;
