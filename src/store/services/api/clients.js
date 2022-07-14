import axios from 'axios';
import config from '../../../../config';

const { url } = config;

export default {
    getAllClients: async (token) => {
        const response = await axios.get(`${url}/clients`, {
            headers: {
                Authorization: 'Bearer ' + token
            }
        });

        return response.data;
    },
    addClient: async (client, token) => {
        const response = await axios.post(`${url}/clients`, {
            name: client.name,
            surname: client.surname,
            city: client.city,
            street: client.street,
            zip_code: client.zip_code,
            phone: client.phone,
        }, {
            headers: {
                Authorization: 'Bearer ' + token
            }
        })
            .then(response => (response))
            .catch(error => console.log(error));

        return response.data;
    },
    editClient: async (client, token) => {
        const response = await axios.patch(`${url}/clients/${client.id}`, {
            name: client.name,
            surname: client.surname,
            city: client.city,
            street: client.street,
            zip_code: client.zip_code,
            phone: client.phone,
        }, {
            headers: {
                Authorization: 'Bearer ' + token
            }
        })
            .then(response => (response))
            .catch(error => console.log(error));

        return response.data;
    },
    deleteClient: async (id, token) => {
        const response = await axios.delete(`${url}/clients/${id}`, {
            headers: {
                Authorization: 'Bearer ' + token
            }
        })
            .then(response => (response))
            .catch(error => console.log(error));

        return response.data;
    }
}
