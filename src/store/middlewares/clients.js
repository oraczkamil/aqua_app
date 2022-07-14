import * as uiActions from '../actions/ui';
import {ADD_CLIENT, DELETE_CLIENT, EDIT_CLIENT, LOAD_ALL_CLIENTS} from "../constants/clients";
import {setClients} from "../actions/clients";
import {unathorized} from "../actions/security";

const loadAllClientsFlow = ({ api }) => ({ dispatch, getState }) => next => async (action) => {
    next(action);

    if (action.type === LOAD_ALL_CLIENTS) {
        try {
            dispatch(uiActions.enableLoading());

            const token = getState().security.token;

            const clients = await api.clients.getAllClients(token);

            dispatch(setClients(clients));

            dispatch(uiActions.disableLoading());
        } catch (error) {
            dispatch(unathorized());
        }
    }
}

const addClientFlow = ({api}) => ({ dispatch, getState }) => next => async (action) => {

    if (action.type === ADD_CLIENT) {
        try {
            dispatch(uiActions.enableLoading());

            const token = getState().security.token;

            const newClient = await api.clients.addClient(action.payload, token);

            const clients = getState().clients.clients.map(client => ({...client}));

            clients.push(newClient);

            dispatch(setClients(clients));

            dispatch(uiActions.disableLoading());
        } catch (error) {
            dispatch(unathorized());
        }
    }

    next(action);
}

const editClientFlow = ({api}) => ({dispatch, getState}) => next => async (action) => {
    if (action.type === EDIT_CLIENT) {
        try {
            dispatch(uiActions.enableLoading());

            const token = getState().security.token;

            const client = await api.clients.editClient(action.payload, token);

            const clients = getState().clients.clients.map(item => {
                if(item.id === client.id) return {...client};
                else return {...item};
            });

            dispatch(setClients(clients));

            dispatch(uiActions.disableLoading());
        } catch (error) {
            dispatch(unathorized());
        }
    }

    next(action);
}

const deleteClientFlow = ({api}) => ({dispatch, getState}) => next => async (action) => {
    if (action.type === DELETE_CLIENT) {
        try {
            dispatch(uiActions.enableLoading());

            const token = getState().security.token;

            const clients = await api.clients.deleteClient(action.payload, token);

            dispatch(setClients(clients))

            dispatch(uiActions.disableLoading());
        } catch (error) {
            dispatch(unathorized());
        }
    }

    next(action);
}

export default [
    loadAllClientsFlow,
    addClientFlow,
    editClientFlow,
    deleteClientFlow
]