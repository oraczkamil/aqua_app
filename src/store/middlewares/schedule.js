import {ADD_MEETING, DELETE_MEETING, EDIT_MEETING, LOAD_ALL_DAYS, LOAD_ONE_DAY} from "../constants/schedule";
import * as uiActions from '../actions/ui';
import {setAllDays, setOneDay} from "../actions/schedule";

const loadAllDaysFlow = ({ api }) => ({ dispatch }) => next => async (action) => {
    next(action);

    if (action.type === LOAD_ALL_DAYS) {
        try {
            dispatch(uiActions.enableLoading());
            const days = await api.schedule.getAllDays();
            dispatch(setAllDays(days));
            dispatch(uiActions.disableLoading());
        } catch (error) {
            console.log(error);
        }
    }
}

const loadOneDayFlow = ({ api }) => ({ dispatch }) => next => async (action) => {
    next(action);

    if (action.type === LOAD_ONE_DAY) {
        try {
            dispatch(uiActions.enableLoading());
            const day = await api.schedule.getOneDay();
            dispatch(setOneDay(day));
            dispatch(uiActions.disableLoading());
        } catch (error) {
            console.log(error);
        }
    }
}

const addMeetingFlow = ({ api }) => ({ dispatch }) => next => async (action) => {
    next(action);

    if (action.type === ADD_MEETING) {
        try {
            dispatch(uiActions.enableLoading());
            await api.schedule.addMeeting(action.payload);
            dispatch(uiActions.disableLoading());
        } catch (error) {
            console.log(error);
        }
    }
}

const editMeetingFlow = ({ api }) => ({ dispatch }) => next => async (action) => {
    next(action);

    if (action.type === EDIT_MEETING) {
        try {
            dispatch(uiActions.enableLoading());
            await api.schedule.editMeeting(action.payload);
            dispatch(uiActions.disableLoading());
        } catch (error) {
            console.log(error);
        }
    }
}

const deleteMeetingFlow = ({ api }) => ({ dispatch }) => next => async (action) => {
    next(action);

    if (action.type === DELETE_MEETING) {
        try {
            dispatch(uiActions.enableLoading());
            await api.schedule.deleteMeeting(action.payload);
            dispatch(uiActions.disableLoading());
        } catch (error) {
            console.log(error);
        }
    }
}

export default [
    loadAllDaysFlow,
    loadOneDayFlow,
    addMeetingFlow,
    editMeetingFlow,
    deleteMeetingFlow
]