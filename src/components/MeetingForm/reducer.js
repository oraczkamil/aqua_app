export const initialState = {
    id: {value: '', error: ''},
    firstname: {value: '', error: ''},
    lastname: {value: '', error: ''},
    date: {value: '', error: ''},
    hour: {value: '', error: ''},
    status: {value: '', error: ''},
    comment: {value: '', error: ''},
    commentAfter: {value: '', error: ''},
    price: {value: '', error: ''},
};

export default function reducer(state, action) {
    switch (action.type) {
        case 'setId': return {...state, id: action.payload};
        case 'setFirstname': return {...state, firstname: action.payload};
        case 'setLastname': return {...state, lastname: action.payload};
        case 'setDate': return {...state, date: action.payload};
        case 'setHour': return {...state, hour: action.payload};
        case 'setStatus': return {...state, status: action.payload};
        case 'setComment': return {...state, comment: action.payload};
        case 'setCommentAfter': return {...state, commentAfter: action.payload};
        case 'setPrice': return {...state, price: action.payload};
        default:
            throw new Error();
    }
}