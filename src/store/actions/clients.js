import * as constants from "../constants/clients";

export const loadClients = { type: constants.LOAD_ALL_CLIENTS };

export const setClients = clients => ({ type: constants.SET_CLIENTS, payload: clients });

export const addClient = client => ({ type: constants.ADD_CLIENT, payload: client })

export const editClient = client => ({ type: constants.EDIT_CLIENT, payload: client });

export const deleteClient = id => ({ type: constants.DELETE_CLIENT, payload: id });