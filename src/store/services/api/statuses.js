import axios from 'axios';
import config from '../../../../config';

const { url } = config;

export default {
    getAllStatuses: async (token) => {
        const response = await axios.get(`${url}/statuses`, {
            headers: {
                Authorization: 'Bearer ' + token
            }
        })
            .then(response => (response))
            .catch(error => console.log(error));

        return response.data;
    },
}