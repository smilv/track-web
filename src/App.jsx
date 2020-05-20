/*
 * @Description: App.jsx
 * @Autor: bin
 * @Date: 2019-12-25 16:56:36
 * @LastEditors: bin
 * @LastEditTime: 2020-05-20 19:07:19
 */
import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { connect } from "react-redux";
import AsyncComponent from "./components/AsyncComponent";
import login from "./route/authorized/login";
const Index = AsyncComponent(() => import("./views/Index"));
const Login = AsyncComponent(() => import("./views/Login"));

class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <Switch>
                    <Route path="/login" component={Login} exact />
                    <Route path="/" component={login(Index, this.props.dispatch)} />
                </Switch>
            </BrowserRouter>
        );
    }
}

export default connect()(App);
