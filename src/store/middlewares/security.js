import { SIGN_IN } from "../constants/security";
import * as uiActions from '../actions/ui';
import {setToken, setUser, signInFailure} from "../actions/security";

const signInFlow = ({ api }) => ({ dispatch }) => next => async (action) => {
    next(action);

    if (action.type === SIGN_IN) {
        try {
            dispatch(uiActions.enableLoading());

            const user = await api.security.signIn(action.payload);

            dispatch(setUser(user));

            dispatch(setToken('token'));
        } catch (error) {
            dispatch(signInFailure('Nieprawidłowe dane logowania'));
        }
        dispatch(uiActions.disableLoading());
    }
}

export default [
    signInFlow
]