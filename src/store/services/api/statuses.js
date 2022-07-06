import axios from 'axios';
import config from '../../../../config';

const { url } = config;

export default {
    getAllStatuses: async () => {
        const response = await axios.get(`${url}/statuses`)
            .then(response => (response))
            .catch(error => console.log(error));

        return response.data;
    },
}