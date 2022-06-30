import * as constants from "../constants/schedule";

const initialState = {
    days: {},
    day: []
};

const scheduleReducer = (state = initialState, action) => {
    switch(action.type) {
        case constants.LOAD_ALL_DAYS: return state;
        case constants.SET_ALL_DAYS:
            return {
                ...state,
                days: action.payload
            }
        case constants.LOAD_ONE_DAY: return state
        case constants.SET_ONE_DAY:
            return {
                ...state,
                day: action.payload
            }
        case constants.ADD_MEETING:
            return {
                ...state,
                day: [...state.day, action.payload]
            }
        case constants.EDIT_MEETING: return state;
        case constants.DELETE_MEETING: return state;
        default: return state;
    }
}

export default scheduleReducer;