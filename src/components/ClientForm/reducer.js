export const initialState = {
    id: {value: '', error: ''},
    name: {value: '', error: ''},
};

export default function reducer(state, action) {
    switch (action.type) {
        case 'setId': return {...state, id: action.payload};
        case 'setName': return {...state, name: action.payload};
        default:
            throw new Error();
    }
}