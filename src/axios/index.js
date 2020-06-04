/*
 * @Description: 接口请求
 * @Autor: bin
 * @Date: 2019-12-25 16:56:36
 * @LastEditors: bin
 * @LastEditTime: 2020-06-04 16:18:25
 */
import axios from "axios";
const instance = axios.create({
    withCredentials: true
});
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
    //获取用户信息
    userInfo: () => {
        return instance.post(_apiPath + "/user/info");
    },
    //更新用户信息
    userUpdate: data => {
        return instance.post(_apiPath + "/user/update", data);
    },
    //登录
    login: data => {
        return instance.post(_apiPath + "/user/login", data);
    },
    //退出登录
    logout: () => {
        return instance.post(_apiPath + "/user/logout");
    },
    //注册
    register: data => {
        return instance.post(_apiPath + "/user/register", data);
    },
    //获取统计pv/uv/ip
    trackCount: data => {
        return instance.post(_apiPath + "/track/getCount", data);
    }
};
