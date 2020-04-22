//bin 2019/12/25
import AsyncComponent from "../components/AsyncComponent";

const Home = AsyncComponent(() => import("../views/Home"));

const routes = [
    {
        name: "首页",
        path: "/",
        component: Home
    }
];

export default routes;
