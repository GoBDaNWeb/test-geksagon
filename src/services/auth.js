import axios from 'axios';

const API_URL = 'http://79.143.31.216';

axios.defaults.baseURL = API_URL;

export const AuthService = {
    async register(data) {
        return axios.post(
            `/register?username=${data.username}&password=${data.password}`,
            { headers: { 'Content-Type': 'application/json' } },
        );
    },
    async login(data) {
        return axios({
            method: 'post',
            url: '/login',
            data,
            headers: { 'Content-Type': 'multipart/form-data' },
        });
    },
};
