import axios from 'axios';
// 创建axios实例
export const request = axios.create({
	baseURL: '/',
	timeout: 15000,
	headers: {
		'Content-Type': 'application/json; charset=utf-8'
	}
});
// request拦截器
request.interceptors.request.use(config => {
	return config;
}, error => {
	console.log(error);
	Promise.reject(error);
});
// respone拦截器
request.interceptors.response.use((response) => {
	return response.data;
}, (error) => {
	console.log('err:' + error);
	let errorInfo = '连接到服务器失败';
	if (error.response && error.response.status) {
		switch (error.response.status) {
		case 400:
			errorInfo = '错误请求';
			break;
		case 401:
			errorInfo = '未授权或授权超时，请重新登录';
			break;
		case 403:
			errorInfo = '拒绝访问';
			break;
		case 404:
			errorInfo = '请求错误,未找到该资源';
			break;
		case 405:
			errorInfo = '请求方法未允许';
			break;
		case 408:
			errorInfo = '请求超时';
			break;
		case 500:
			errorInfo = '服务器端出错';
			break;
		case 501:
			errorInfo = '网络未实现';
			break;
		case 502:
			errorInfo = '网络错误';
			break;
		case 503:
			errorInfo = '服务不可用';
			break;
		case 504:
			errorInfo = '网络超时';
			break;
		case 505:
			errorInfo = 'http版本不支持该请求';
			break;
		default:
			errorInfo = '连接到服务器失败';
		}
	}
	console.log(errorInfo);
	return Promise.reject(error);
});
