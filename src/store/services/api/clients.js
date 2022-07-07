import axios from 'axios';
import config from '../../../../config';

const { url } = config;

export default {
    getAllClients: async () => {
        const response = await axios.get(`${url}/clients`);

        return response.data;
    },
    addClient: async (client) => {
        const response = await axios.post(`${url}/clients`, {
            name: client.name,
            surname: client.surname,
            city: client.city,
            street: client.street,
            zip_code: client.zip_code,
            phone: client.phone,
        })
            .then(response => (response))
            .catch(error => console.log(error));

        return response.data;
    },
    editClient: async (client) => {
        const response = await axios.patch(`${url}/clients/${client.id}`, {
            name: client.name,
            surname: client.surname,
            city: client.city,
            street: client.street,
            zip_code: client.zip_code,
            phone: client.phone,
        })
            .then(response => (response))
            .catch(error => console.log(error));

        return response.data;
    },
    deleteClient: async (id) => {
        const response = await axios.delete(`${url}/clients/${id}`)
            .then(response => (response))
            .catch(error => console.log(error));

        return response.data;
    }
}
