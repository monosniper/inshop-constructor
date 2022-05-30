import axios from 'axios';
import Noty from 'noty';

export const SERVER_URL = process.env.NEXT_PUBLIC_REACT_APP_SERVER_URL;
export const API_URL = process.env.NEXT_PUBLIC_REACT_APP_SERVER_URL + '/api/';

const $server = axios.create({
    withCredentials: true,
    baseURL: SERVER_URL
})

const $api = axios.create({
    withCredentials: true,
    baseURL: API_URL
})

$api.interceptors.request.use((config) => {
    config.headers.Authorization = `Bearer ${localStorage.getItem('token')}`;
    return config;
});

export {$api, $server};
