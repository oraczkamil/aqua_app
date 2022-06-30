import {
    ADD_MEETING,
    DELETE_MEETING,
    EDIT_MEETING,
    LOAD_ALL_DAYS,
    LOAD_ONE_DAY,
    SET_ALL_DAYS,
    SET_ONE_DAY
} from "../constants/schedule";

const initialState = {
    days: {},
    day: []
};

const scheduleReducer = (state = initialState, action) => {
    switch(action.type) {
        case LOAD_ALL_DAYS:
            return {
                ...state,
            };
        case SET_ALL_DAYS:
            return {
                ...state,
                days: action.payload
            }
        case LOAD_ONE_DAY:
            return {
                ...state,
            }
        case SET_ONE_DAY:
            return {
                ...state,
                day: action.payload
            }
        case ADD_MEETING:
            return {
                ...state,
                day: [...state.day, action.payload]
            }
        case EDIT_MEETING:
            return {
                ...state
            }
        case DELETE_MEETING:
            return {
                ...state
            }
        default:
            return state;
    }
}

export default scheduleReducer;