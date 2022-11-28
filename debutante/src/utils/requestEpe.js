import axios from 'axios';
import cookie from "js-cookie";
import { ElMessage } from "element-plus";
const service = axios.create({
    NODE_ENV: '"development"',
    baseURL: 'http://123.56.156.8:8080',
    timeout: 5000
});


//响应拦截器
service.interceptors.response.use(
    response => {
        //响应成功的回调函数
        if (response.status === 200) {
            return response.data;
        } else {
            //失败的回调函数
            Promise.reject();
        }
    },
    error => {
        return Promise.reject();
    }
);

export default service;
