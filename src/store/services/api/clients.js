import axios from 'axios';
const url = 'http://127.0.0.1:8000/api';

let clients = [
    {
        id: 1,
        name: 'Kacper',
    },
    {
        id: 2,
        name: 'Daniel',
    },
    {
        id: 3,
        name: 'Mucha',
    },
];

export default {
    getAllClients: async () => {
        return clients;

    },
    addClient: async (client) => {
        clients.push(client);
    },
    editClient: async (client) => {
        clients.map((item, index) => {
            if(item.id === client.id) clients[index] = client;
        });
    },
    deleteClient: async (id) => {
        clients.map((item, index) => {
            if(item.id === id) clients.splice(index);
        });
    }
}
