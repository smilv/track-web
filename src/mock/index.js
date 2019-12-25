//bin 2019/12/25
import Mock from "mockjs";
import map from "./map";

//指定被拦截的 Ajax 请求的响应时间
Mock.setup({
    timeout: "10-1000"
});

//登录验证
Mock.mock(/\/uc\/validate\-user/, map.validateUser);
