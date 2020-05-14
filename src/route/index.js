/*
 * @Description: 路由
 * @Autor: bin
 * @Date: 2019-12-25 16:56:36
 * @LastEditors: bin
 * @LastEditTime: 2020-05-14 15:58:45
 */
import React from "react";
import AsyncComponent from "../components/AsyncComponent";
import { HomeOutlined, LineChartOutlined } from "@ant-design/icons";

const Home = AsyncComponent(() => import("../views/Home"));
const Track = AsyncComponent(() => import("../views/Track"));

const routes = [
    {
        name: "首页",
        path: "/",
        component: Home,
        icon: <HomeOutlined />
    },
    {
        name: "统计",
        path: "/track",
        component: Track,
        icon: <LineChartOutlined />
    }
];

export default routes;
