export const initialState = {
    id: '',
    clientId: null,
    date: '2022-06-30',
    hour: '15:00:00',
    status: null,
    comment: 'test',
    commentAfter: 'test',
    price: 200,
    isDatePickerVisible: false,
    isTimePickerVisible: false,
    dataClients: [],
    client: null,
    errors: [],
    dataStatuses: [],
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
        case 'setDatePickerVisibility': return {...state, isDatePickerVisible: action.payload};
        case 'setTimePickerVisibility': return {...state, isTimePickerVisible: !state.isTimePickerVisible};
        case 'setDataClients': return {...state, dataClients: action.payload};
        case 'setClient': return {...state, client: action.payload};
        case 'setErrors': return {...state, errors: action.payload};
        case 'setDataStatuses': return {...state, dataStatuses: action.payload};
        default:
            throw new Error(action.type);
    }
}