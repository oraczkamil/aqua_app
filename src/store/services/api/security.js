import axios from 'axios';
import config from '../../../../config';

const { url } = config;

export default {
    signIn: async ({login, password}) => {
        const response = await axios.post(`${url}/users/login`,
            {
                email: login,
                password: password,
            })
            .then(response => {
                return response;
            })
            .catch(error => {

            });

        return response.data;
    }
}
