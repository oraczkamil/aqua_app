import * as constants from "../constants/security";

const initialState = {
    token: 'token',
    user: {},
};

const securityReducer = (state = initialState, action) => {
    switch(action.type) {
        case constants.SIGN_IN: return state;
        case constants.SIGN_OUT: return state;
        case constants.SET_TOKEN:
            return {
                ...state,
                token: action.payload
            };
        case constants.SET_USER:
            return {
                ...state,
                user: action.payload
            };
        default: return state;
    }
}

export default securityReducer;