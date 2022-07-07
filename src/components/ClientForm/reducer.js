export const initialState = {
    id: '',
    name: '',
    surname: '',
    city: '',
    street: '',
    zip_code: '',
    phone: '',
    errors: [],
};

export default function reducer(state, action) {
    switch (action.type) {
        case 'setId': return {...state, id: action.payload};
        case 'setName': return {...state, name: action.payload};
        case 'setSurname': return {...state, surname: action.payload};
        case 'setCity': return {...state, city: action.payload};
        case 'setStreet': return {...state, street: action.payload};
        case 'setZipCode': return {...state, zip_code: action.payload};
        case 'setPhone': return {...state, phone: action.payload};
        case 'setErrors': return {...state, errors: action.payload};
        default:
            throw new Error();
    }
}