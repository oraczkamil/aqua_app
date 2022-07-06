import {LOAD_ALL_STATUSES} from '../constants/statuses';
import * as uiActions from '../actions/ui'
import {setStatuses} from '../actions/statuses';

const loadAllStatusesFlow = ({api}) => ({dispatch}) => next => async (action) => {
    next(action);

    if(action.type === LOAD_ALL_STATUSES){
        dispatch(uiActions.enableLoading());

        const statuses = await api.statuses.getAllStatuses();

        dispatch(setStatuses(statuses));

        dispatch(uiActions.disableLoading());
    }
}

export default [
    loadAllStatusesFlow,
]