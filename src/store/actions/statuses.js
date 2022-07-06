import {LOAD_ALL_STATUSES, SET_ALL_STATUSES} from '../constants/statuses';

export const loadAllStatuses = {type: LOAD_ALL_STATUSES};

export const setStatuses = statuses => ({type: SET_ALL_STATUSES, payload: statuses});