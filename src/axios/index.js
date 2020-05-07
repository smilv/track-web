/*
 * @Description: 接口请求
 * @Autor: bin
 * @Date: 2019-12-25 16:56:36
 * @LastEditors: bin
 * @LastEditTime: 2020-05-07 15:57:45
 */
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
    //注册
    register: data => {
        return instance.post(_localPath + "/user/register", data);
    },
    //获取统计pv/uv/ip
    trackCount: data => {
        return instance.post(_localPath + "/track/getCount", data);
    }
};
