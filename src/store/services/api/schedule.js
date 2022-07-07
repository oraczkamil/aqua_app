import axios from 'axios';
import config from '../../../../config';

const { url } = config;

console.log(url);

export default {
    getAllDays: async (userId) => {
        const response = await axios.get(`${url}/users/${userId}/meetingsdates`)
            .then(response => (response))
            .catch(error => console.log(error));

        return response.data;
    },
    getOneDay: async (date, userId) => {
        const response = await axios.get(`${url}/users/${userId}/meetings/${date}`)
            .then(response => (response))
            .catch(error => console.log(error));

        return response.data;
    },
    addMeeting: async (meeting, userId) => {
        const response = await axios.post(`${url}/meetings`, {
            user_id: userId,
            client_id: meeting.clientId,
            date: meeting.date,
            hour: meeting.hour,
            status_id: meeting.status,
            comment: meeting.comment,
            comment_after: meeting.commentAfter,
            price: meeting.price
        })
            .then(response => (response))
            .catch(error => console.log(error));

        return response.data;
    },
    editMeeting: async (meeting, userId) => {
        const response = await axios.patch(`${url}/meetings/${meeting.id}`, {
            user_id: userId,
            client_id: meeting.clientId,
            date: meeting.date,
            hour: meeting.hour,
            status_id: meeting.status,
            comment: meeting.comment,
            comment_after: meeting.commentAfter,
            price: meeting.price
        })
            .then(response => (response))
            .catch(error => console.log(error));

        return response.data;
    },
    deleteMeeting: async ({userId, id, date}) => {
        const response = await axios.delete(`${url}/users/${userId}/date/${date}/meeting/${id}`)
            .then(response => (response))
            .catch(error => console.log(error));

        return response.data;
    }
}