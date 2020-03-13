//bin 2019/12/25
import React, { Component } from "react";
import { Route, NavLink } from "react-router-dom";
import AsyncComponent from "../components/AsyncComponent";
import login from "./login";

const PageA = AsyncComponent(() => import("../views/page-a"));
const PageB = AsyncComponent(() => import("../views/page-b"));
const PageC = AsyncComponent(() => import("../views/page-c"));

const routerMap = [
    {
        name: "跳转a",
        path: "/",
        component: PageA
    },
    {
        name: "跳转b(登录拦截)",
        path: "/page-b",
        component: login(PageB)
    },
    {
        name: "跳转发布/订阅",
        path: "/page-c",
        component: PageC
    }
];

class Routes extends Component {
    render() {
        return (
            <div>
                {routerMap.map((item, key) => {
                    return (
                        <NavLink key={key} to={item.path} style={{ padding: "10px" }}>
                            {item.name}
                        </NavLink>
                    );
                })}
                {routerMap.map((item, key) => {
                    return <Route key={key} path={item.path} exact component={item.component} />;
                })}
            </div>
        );
    }
}

export default Routes;
