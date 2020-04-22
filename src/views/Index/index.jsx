/**
 * 主页面框架
 * bin 2020/4/22
 */
import React, { Component } from "react";
import { Route, NavLink } from "react-router-dom";
import { Layout, Menu } from "antd";
import style from "./style.css";
import routes from "../../route";
const { Header, Content, Sider, Footer } = Layout;

class Index extends Component {
    render() {
        return (
            <Layout>
                <Sider className={style.slider}>
                    <Menu onClick={this.handleClick} defaultSelectedKeys="0" className={style.menu} mode="inline">
                        {routes.map((item, key) => {
                            return (
                                <Menu.Item key={key}>
                                    <NavLink to={item.path}>{item.name}</NavLink>
                                </Menu.Item>
                            );
                        })}
                    </Menu>
                </Sider>
                <Layout className={style.siteLayout}>
                    <Header className={`${style.header} ${style.sitebackground}`} />
                    <Content className={style.content}>
                        <div className={style.sitebackground}>
                            {routes.map((item, key) => {
                                return <Route key={key} path={item.path} exact component={item.component} />;
                            })}
                        </div>
                    </Content>
                    <Footer>Created by bin</Footer>
                </Layout>
            </Layout>
        );
    }
}

export default Index;
