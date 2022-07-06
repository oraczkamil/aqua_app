import {LOAD_ALL_STATUSES, SET_ALL_STATUSES} from '../constants/statuses';

const initialState = {
    allStatuses: [],
}

const statusesReducer = (state = initialState, action) => {
    switch(action.type){
        case LOAD_ALL_STATUSES: return state;
        case SET_ALL_STATUSES: 
            return {
                ...state,
                allStatuses: action.payload
            };
        default: return state;
    }
}

export default statusesReducer;