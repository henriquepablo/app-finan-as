import axios from "axios";

const api = axios.create({
    baseURL: 'http://172.16.1.254:3333'
});

export default api;