/*
 * @Description: 路由
 * @Autor: bin
 * @Date: 2019-12-25 16:56:36
 * @LastEditors: bin
 * @LastEditTime: 2020-05-18 16:42:35
 */
import React from "react";
import AsyncComponent from "../components/AsyncComponent";
import { HomeOutlined, LineChartOutlined, SettingOutlined } from "@ant-design/icons";

const Home = AsyncComponent(() => import("../views/Home"));
const Track = AsyncComponent(() => import("../views/Track"));
const Profile = AsyncComponent(() => import("../views/Profile"));

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
    },
    {
        name: "个人设置",
        path: "/profile",
        component: Profile,
        icon: <SettingOutlined />
    }
];

export default routes;
