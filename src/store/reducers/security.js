import * as constants from "../constants/security";

const initialState = {
    token: '',
    user: {},
    error: '',
};

const securityReducer = (state = initialState, action) => {
    switch(action.type) {
        case constants.SIGN_IN: 
            return {
                ...state,
                error: '',
            };
        case constants.SIGN_OUT:
            return {
                error: '',
                user: {},
                token: '',
            };
        case constants.SET_TOKEN:
            return {
                ...state,
                token: action.payload
            };
        case constants.SET_USER:
            return {
                ...state,
                user: action.payload,
            };
        case constants.SIGN_IN_FAILURE:
            return {
                ...state,
                error: action.payload
            }
        default: return state;
    }
}

export default securityReducer;