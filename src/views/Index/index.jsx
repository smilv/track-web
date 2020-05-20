/*
 * @Description: 主页面框架
 * @Autor: bin
 * @Date: 2020-04-22 18:22:44
 * @LastEditors: bin
 * @LastEditTime: 2020-05-20 19:06:59
 */
import React, { Component } from "react";
import { connect } from "react-redux";
import { Route, NavLink, Redirect, Switch } from "react-router-dom";
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
        const { user } = this.props;
        return (
            <Layout style={{ minHeight: "100%" }}>
                <Sider className={style.slider}>
                    <SliderAvatar user={user} />
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
                        <SliderHeader user={user} />
                    </Header>
                    <Content className={style.content}>
                        <Switch>
                            {route.map((item, key) => {
                                return <Route key={key} path={item.path} exact component={item.component} />;
                            })}
                            <Redirect to="/" />
                        </Switch>
                    </Content>
                    <Footer className={style.footer}>Created by bin</Footer>
                </Layout>
            </Layout>
        );
    }
}

/**
 * 只监听它所关联的部分 state。
 * 该回调函数必须返回一个纯对象，这个对象会与组件的 props 合并。
 */
const mapStateToProps = state => {
    return {
        user: state.user
    };
};

/**
 * 连接 React 组件与 Redux store。
 * 连接操作不会改变原来的组件类。
 * 反而返回一个新的已与 Redux store 连接的组件类。
 */
export default connect(mapStateToProps)(Index);
