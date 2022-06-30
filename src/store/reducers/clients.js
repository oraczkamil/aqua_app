import {ADD_CLIENT, DELETE_CLIENT, EDIT_CLIENT, LOAD_ALL_CLIENTS, SET_CLIENTS} from "../constants/clients";
import {ADD_MEETING, DELETE_MEETING, EDIT_MEETING} from "../constants/schedule";

const initialState = {
    clients: [],
};

const clientsReducer = (state = initialState, action) => {
    switch(action.type) {
        case LOAD_ALL_CLIENTS:
            return {
                ...state,
            };
        case SET_CLIENTS:
            return {
                ...state,
                clients: action.payload
            }
        case ADD_CLIENT:
            return {
                ...state,
                clients: [...state.clients, action.payload]
            }
        case EDIT_CLIENT:
            return {
                ...state,
                clients: [...state.clients]
            }
        case DELETE_CLIENT:
            return {
                ...state,
                clients: [...state.clients]
            }
        default:
            return state;
    }
}

export default clientsReducer;