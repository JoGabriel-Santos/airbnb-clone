import axios from "axios";

const API = axios.create({ baseURL: 'http://localhost:5000' });

/*
    API.interceptors.request.use((request) => {
        if (localStorage.getItem('profile')) {
            request.headers.Authorization = JSON.parse(localStorage.getItem('profile'))['token'].credential ?
                `Bearer ${JSON.parse(localStorage.getItem('profile'))['token'].credential}` :
                `Bearer ${JSON.parse(localStorage.getItem('profile'))['token']}`
        }

        return request
    })
*/

export const signin = (userInfo) => API.post("/user/signin", userInfo);
export const signup = (userInfo) => API.post("/user/signup", userInfo);

export const getRooms = () => API.get(`/room/getRooms`);
export const getRoomById = (id_product) => API.get(`/room/getRoomById/${id_room}`);
export const publishRoom = (roomInfo) => API.post("/room/publishRoom", roomInfo);