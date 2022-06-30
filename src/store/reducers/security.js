import { SIGN_IN, SIGN_OUT, SET_TOKEN, SET_USER } from "../constants/security";

const initialState = {
    token: 'token',
    user: {},
};

const securityReducer = (state = initialState, action) => {
    switch(action.type) {
        case SIGN_IN:
            return {
                ...state,
            };
        case SIGN_OUT:
            return {
                ...state,
            };
        case SET_TOKEN:
            return {
                ...state,
                token: action.payload
            };
        case SET_USER:
            return {
                ...state,
                user: action.payload
            };
        default:
            return state;
    }
}

export default securityReducer;