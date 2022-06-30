export const initialState = {
    id: {value: '', error: ''},
    name: {value: '', error: ''},
    surname: {value: '', error: ''},
    city: {value: '', error: ''},
    address: {value: '', error: ''},
    zip_code: {value: '', error: ''},
    phone: {value: '', error: ''},
};

export default function reducer(state, action) {
    switch (action.type) {
        case 'setId': return {...state, id: action.payload};
        case 'setName': return {...state, name: action.payload};
        case 'setSurname': return {...state, surname: action.payload};
        case 'setCity': return {...state, city: action.payload};
        case 'setAddress': return {...state, address: action.payload};
        case 'setZipCode': return {...state, zip_code: action.payload};
        case 'setPhone': return {...state, phone: action.payload};
        default:
            throw new Error();
    }
}