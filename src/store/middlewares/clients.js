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
}

const addClientFlow = ({api}) => ({ dispatch, getState }) => next => async (action) => {

    if (action.type === ADD_CLIENT) {
        try {
            dispatch(uiActions.enableLoading());

            const newClient = await api.clients.addClient(action.payload);

            const clients = getState().clients.clients.map(client => ({...client}));

            clients.push(newClient);

            dispatch(setClients(clients));

            dispatch(uiActions.disableLoading());
        } catch (error) {
            console.log(error);
        }
    }

    next(action);
}

const editClientFlow = ({api}) => ({dispatch, getState}) => next => async (action) => {
    if (action.type === EDIT_CLIENT) {
        try {
            dispatch(uiActions.enableLoading());

            const client = await api.clients.editClient(action.payload);

            const clients = getState().clients.clients.map(item => {
                if(item.id === client.id) return {...client};
                else return {...item};
            });

            dispatch(setClients(clients));

            dispatch(uiActions.disableLoading());
        } catch (error) {
            console.log(error);
        }
    }

    next(action);
}

const deleteClientFlow = ({api}) => ({dispatch}) => next => async (action) => {
    if (action.type === DELETE_CLIENT) {
        try {
            dispatch(uiActions.enableLoading());

            const clients = await api.clients.deleteClient(action.payload);

            dispatch(setClients(clients))

            dispatch(uiActions.disableLoading());
        } catch (error) {
            console.log(error);
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