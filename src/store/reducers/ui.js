import {ENABLE_LOADING, DISABLE_LOADING} from "../constants/ui";

const initialState = {
    loading: false
};

const uiReducer = (state = initialState, action) => {
    switch(action.type) {
        case ENABLE_LOADING:
            return {
                ...state,
                loading: true
            };
        case DISABLE_LOADING:
            return {
                ...state,
                loading: false
            };
        default: return state;
    }
}

export default uiReducer;