import * as uiActions from '../actions/ui';
import {ADD_CLIENT, DELETE_CLIENT, EDIT_CLIENT, LOAD_ALL_CLIENTS} from "../constants/clients";
import {setClients} from "../actions/clients";

const loadAllClientsFlow = ({ api }) => ({ dispatch }) => next => async (action) => {
    next(action);

    if (action.type === LOAD_ALL_CLIENTS) {
        try {
            dispatch(uiActions.enableLoading());
            const clients = await api.clients.getAllClients();
            dispatch(setClients(clients));
            dispatch(uiActions.disableLoading());
        } catch (error) {
            console.log(error);
        }
    }

    if (action.type === ADD_CLIENT) {
        try {
            dispatch(uiActions.enableLoading());
            await api.clients.addClient(action.payload);
            dispatch(uiActions.disableLoading());
        } catch (error) {
            console.log(error);
        }
    }

    if (action.type === EDIT_CLIENT) {
        try {
            dispatch(uiActions.enableLoading());
            await api.clients.editClient(action.payload);
            dispatch(uiActions.disableLoading());
        } catch (error) {
            console.log(error);
        }
    }

    if (action.type === DELETE_CLIENT) {
        try {
            dispatch(uiActions.enableLoading());
            await api.clients.deleteClient(action.payload);
            dispatch(uiActions.disableLoading());
        } catch (error) {
            console.log(error);
        }
    }
}

export default [
    loadAllClientsFlow
]