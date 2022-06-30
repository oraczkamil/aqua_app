import * as constants from "../constants/security";

export const signIn = { type: constants.SIGN_IN }

export const signOut = { type: constants.SIGN_OUT }

export const setToken = token => ({ type: constants.SET_TOKEN, payload: token })

export const setUser = user => ({ type: constants.SET_USER, payload: user })