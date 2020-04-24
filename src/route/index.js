//bin 2019/12/25
import AsyncComponent from "../components/AsyncComponent";

const Home = AsyncComponent(() => import("../views/Home"));
const Track = AsyncComponent(() => import("../views/Track"));

const routes = [
    {
        name: "首页",
        path: "/",
        component: Home
    },
    {
        name: "统计",
        path: "/track",
        component: Track
    }
];

export default routes;
