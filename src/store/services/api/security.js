import axios from 'axios';
const url = 'http://127.0.0.1:8000/api';

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
                console.log(error);
            });

        return response.data;
    }
}
