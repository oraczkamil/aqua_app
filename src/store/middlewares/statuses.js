import {LOAD_ALL_STATUSES} from '../constants/statuses';
import * as uiActions from '../actions/ui'
import {setStatuses} from '../actions/statuses';
import {unathorized} from "../actions/security";

const loadAllStatusesFlow = ({api}) => ({dispatch, getState}) => next => async (action) => {
    next(action);

    if(action.type === LOAD_ALL_STATUSES){
        try{
            dispatch(uiActions.enableLoading());

            const token = getState().security.token;

            const statuses = await api.statuses.getAllStatuses(token);

            dispatch(setStatuses(statuses));

            dispatch(uiActions.disableLoading());
        }catch(error){
            dispatch(unathorized());
        }
    }
}

export default [
    loadAllStatusesFlow,
]