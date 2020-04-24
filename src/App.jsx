import React, { Component } from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import AsyncComponent from "./components/AsyncComponent";
const Index = AsyncComponent(() => import("./views/Index"));
const Login = AsyncComponent(() => import("./views/Login"));

class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <Switch>
                    <Route path="/login" component={Login} exact />
                    <Route path="/" component={Index} />
                </Switch>
            </BrowserRouter>
        );
    }
}

export default App;
