//bin 2019/12/25
import axios from "axios";
const instance = axios.create();
// axios.defaults.withCredentials = true;
//请求拦截器
instance.interceptors.request.use(
    config => {
        return config;
    },
    error => {
        return Promise.reject(error);
    }
);
//响应拦截器
instance.interceptors.response.use(
    response => {
        return Promise.resolve(response.data);
    },
    error => {
        return Promise.reject(error);
    }
);
export default {
    //用户是否登录
    validateUser: () => {
        return instance.get(_apiPath + "/uc/validate-user");
    }
};
