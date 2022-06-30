import axios from 'axios';

let meetings = [
    {
        id: '1',
        firstname: 'firstname',
        lastname: 'lastname',
        date: '2022-06-22',
        hour: '15:00',
        status: 'status',
        comment: 'comment',
        commentAfter: 'commentAfter',
        price: 200
    },
    {
        id: '2',
        firstname: 'firstname',
        lastname: 'lastname',
        date: '2022-06-22',
        hour: '15:00',
        status: 'status',
        comment: 'comment',
        commentAfter: 'commentAfter',
        price: 200
    },
    {
        id: '3',
        firstname: 'firstname',
        lastname: 'lastname',
        date: '2022-06-22',
        hour: '15:00',
        status: 'status',
        comment: 'comment',
        commentAfter: 'commentAfter',
        price: 200
    }
]

export default {
    getAllDays: async () => {
        const response = await axios.get('https://jsonplaceholder.typicode.com/todos');

        return {
            '2022-06-16': {marked: true},
            '2022-06-17': {marked: true},
            '2022-06-18': {marked: true},
            '2022-06-19': {marked: true},
            '2022-06-22': {marked: true},
            '2022-06-27': {marked: true},
        }
    },
    getOneDay: async () => {
        return meetings;
    },
    addMeeting: async (meeting) => {
        meetings.push(meeting);
    },
    editMeeting: async (meeting) => {
        meetings.map((item, index) => {
            if(item.id === meeting.id) meetings[index] = meeting;
        })
    },
    deleteMeeting: async (id) => {
        meetings.map((item, index) => {
            if(item.id === id) meetings.splice(index);
        })
    }
}