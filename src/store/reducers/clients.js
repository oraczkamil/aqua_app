import {ADD_CLIENT, DELETE_CLIENT, EDIT_CLIENT, LOAD_ALL_CLIENTS, SET_CLIENTS} from "../constants/clients";

const initialState = {
    clients: [],
};

const clientsReducer = (state = initialState, action) => {
    switch(action.type) {
        case LOAD_ALL_CLIENTS: return state;
        case SET_CLIENTS:
            return {
                ...state,
                clients: action.payload
            }
        case ADD_CLIENT: return state;
        case EDIT_CLIENT: return state;
        case DELETE_CLIENT: return state;
        default: return state;
    }
}

export default clientsReducer;