export const initialState = {
    id: {value: '', error: ''},
    clientId: {value: null, error: ''},
    date: {value: '2022-06-30', error: ''},
    hour: {value: '15:00:00', error: ''},
    status: {value: 'test', error: ''},
    comment: {value: 'test', error: ''},
    commentAfter: {value: 'test', error: ''},
    price: {value: 200, error: ''},
};

export default function reducer(state, action) {
    switch (action.type) {
        case 'setId': return {...state, id: action.payload};
        case 'setClientId': return {...state, clientId: action.payload};
        case 'setDate': return {...state, date: action.payload};
        case 'setHour': return {...state, hour: action.payload};
        case 'setStatus': return {...state, status: action.payload};
        case 'setComment': return {...state, comment: action.payload};
        case 'setCommentAfter': return {...state, commentAfter: action.payload};
        case 'setPrice': return {...state, price: action.payload};
        default:
            throw new Error(action.type);
    }
}