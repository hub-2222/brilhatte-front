import axios from 'axios';
import {redirect} from "next/navigation";

export const api = axios.create({
    baseURL: process.env.API_URL,
    withCredentials: false,
    headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Headers": "Authorization",
        "Access-Control-Allow-Methods": "GET, POST, OPTIONS, PUT, PATCH, DELETE",
        "Content-Type": "application/json;charset=UTF-8"
    }
});

api.interceptors.request.use(
    (config) => {
        const token = JSON.parse(localStorage.getItem('authToken'));

        if (token && config.url !== '/auth/login') {
            config.headers.Authorization = `Bearer ${token}`;
        }

        return config;
    },

    (error) => Promise.reject(error)
)

api.interceptors.response.use(
    (response) => response,
    async (error) => {
        const originalRequest = error.config;

        if (error.response?.status === 401 && !originalRequest._retry) {
            redirect('')
        }

        return Promise.reject(error);
    }
);