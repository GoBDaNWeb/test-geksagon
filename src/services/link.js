import axios from 'axios';

const API_URL = 'http://79.143.31.216';

axios.defaults.baseURL = API_URL;

export const LinkService = {
    async squeeze(data) {
        return axios({
            method: 'post',
            url: `squeeze?link=${data.link}`,
            headers: {
                Authorization: `Bearer ${data.token}`,
                accept: 'application/json',
            },
        });
    },
    async statistics(data) {
        return axios({
            method: 'get',
            url: '/statistics?offset=0&limit=0',
            headers: {
                Authorization: `Bearer ${data.token}`,
                accept: 'application/json',
            },
        });
    },
};
