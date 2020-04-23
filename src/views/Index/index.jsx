/**
 * 主页面框架
 * bin 2020/4/22
 */
import React, { Component } from "react";
import { Route, NavLink } from "react-router-dom";
import { Layout, Menu } from "antd";
import { HomeOutlined } from "@ant-design/icons";
import style from "./style.css";
import route from "../../route";
import SliderAvatar from "../../components/SliderAvatar";
import SliderHeader from "../../components/SliderHeader";

const { Header, Content, Sider, Footer } = Layout;

class Index extends Component {
    render() {
        return (
            <Layout>
                <Sider className={style.slider}>
                    <SliderAvatar />
                    <Menu onClick={this.handleClick} defaultSelectedKeys="0" className={style.menu} mode="inline">
                        {route.map((item, key) => {
                            return (
                                <Menu.Item key={key}>
                                    <HomeOutlined />
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
