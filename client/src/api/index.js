import axios from "axios";

const API = axios.create({ baseURL: 'http://localhost:5000' });

API.interceptors.request.use((request) => {
    if (localStorage.getItem('profile')) {
        request.headers.Authorization = `Bearer ${JSON.parse(localStorage.getItem('profile'))['token'].credential}`;
    }

    return request;
})