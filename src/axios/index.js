/*
 * @Description: 接口请求
 * @Autor: bin
 * @Date: 2019-12-25 16:56:36
 * @LastEditors: bin
 * @LastEditTime: 2020-05-13 10:50:24
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
    //登录
    login: data => {
        return instance.post(_localPath + "/user/login", data);
    },
    //退出登录
    logout: () => {
        return instance.post(_localPath + "/user/logout");
    },
    //注册
    register: data => {
        return instance.post(_localPath + "/user/register", data);
    },
    //获取统计pv/uv/ip
    trackCount: data => {
        return instance.post(_localPath + "/track/getCount", data);
    }
};
