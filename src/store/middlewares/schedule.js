import {ADD_MEETING, DELETE_MEETING, EDIT_MEETING, LOAD_ALL_DAYS, LOAD_ONE_DAY} from "../constants/schedule";
import * as uiActions from '../actions/ui';
import {setAllDays, setOneDay} from "../actions/schedule";
import {unathorized} from "../actions/security";

const loadAllDaysFlow = ({ api }) => ({ dispatch, getState }) => next => async (action) => {
    next(action);

    if (action.type === LOAD_ALL_DAYS) {
        try {
            dispatch(uiActions.enableLoading());

            const userId = getState().security.user.id;

            const token = getState().security.token;

            const days = await api.schedule.getAllDays(userId, token);

            dispatch(setAllDays(days));

            dispatch(uiActions.disableLoading());
        } catch (error) {
            dispatch(unathorized());
        }
    }
}

const loadOneDayFlow = ({ api }) => ({ dispatch, getState }) => next => async (action) => {
    next(action);

    if (action.type === LOAD_ONE_DAY) {
        try {
            dispatch(uiActions.enableLoading());

            const userId = getState().security.user.id;

            const token = getState().security.token;

            const day = await api.schedule.getOneDay(action.payload, userId, token);

            dispatch(setOneDay(day));

            dispatch(uiActions.disableLoading());
        } catch (error) {
            dispatch(unathorized());
        }
    }
}

const addMeetingFlow = ({api}) => ({ dispatch, getState }) => next => async (action) => {

    if (action.type === ADD_MEETING) {
        try {
            dispatch(uiActions.enableLoading());

            const userId = getState().security.user.id;

            const token = getState().security.token;

            let day = await api.schedule.getOneDay(action.payload.date, userId, token);

            const newMeeting = await api.schedule.addMeeting(action.payload, userId);

            day.push(newMeeting);

            dispatch(setOneDay(day));

            dispatch(uiActions.disableLoading());
        } catch (error) {
            dispatch(unathorized());
        }
    }

    next(action);
}

const editMeetingFlow = ({ api }) => ({ dispatch, getState }) => next => async (action) => {
    next(action);

    if (action.type === EDIT_MEETING) {
        try {
            dispatch(uiActions.enableLoading());

            const userId = getState().security.user.id;

            const token = getState().security.token;

            const meeting = await api.schedule.editMeeting(action.payload, userId, token);

            const meetings = getState().schedule.day.map(item => {
                if(item.id === meeting.id) return {...meeting};
                else return {...item};
            });

            dispatch(setOneDay(meetings));

            dispatch(uiActions.disableLoading());
        } catch (error) {
            dispatch(unathorized());
        }
    }
}

const deleteMeetingFlow = ({ api }) => ({ dispatch, getState }) => next => async (action) => {

    if (action.type === DELETE_MEETING) {
        try {
            dispatch(uiActions.enableLoading());

            const userId = getState().security.user.id;

            const token = getState().security.token;

            action.payload['userId'] = userId;

            const meetings = await api.schedule.deleteMeeting(action.payload, token);

            dispatch(setOneDay(meetings))

            dispatch(uiActions.disableLoading());
        } catch (error) {
            dispatch(unathorized());
        }
    }

    next(action);
}

export default [
    loadAllDaysFlow,
    loadOneDayFlow,
    addMeetingFlow,
    editMeetingFlow,
    deleteMeetingFlow
]