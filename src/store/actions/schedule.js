import * as constants from "../constants/schedule";

export const loadAllDays = { type: constants.LOAD_ALL_DAYS }

export const setAllDays = days => ({ type: constants.SET_ALL_DAYS, payload: days });

export const loadOneDay = { type: constants.LOAD_ONE_DAY }

export const setOneDay = day => ({ type: constants.SET_ONE_DAY, payload: day});

export const addMeeting = meeting => ({ type: constants.ADD_MEETING, payload: meeting })

export const editMeeting = meeting => ({ type: constants.EDIT_MEETING, payload: meeting });

export const deleteMeeting = id => ({ type: constants.DELETE_MEETING, payload: id });