//bin 2019/12/25
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
