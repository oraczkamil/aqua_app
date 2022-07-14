import {SIGN_IN, SIGN_IN_FAILURE, SIGN_OUT, UNAUTHORIZED} from "../constants/security";
import * as uiActions from '../actions/ui';
import {setToken, setUser, signInFailure, unathorized} from "../actions/security";
import {Login} from '../../screens';
import navigationService from "../../utils/helpers/NavigationService";

const signInFlow = ({ api }) => ({ dispatch }) => next => async (action) => {
    next(action);

    if (action.type === SIGN_IN) {
        try {
            dispatch(uiActions.enableLoading());

            const user = await api.security.signIn(action.payload);

            dispatch(setUser(user.user));

            dispatch(setToken(user.token));
        } catch (error) {
            dispatch(signInFailure('Nieprawidłowe dane logowania'));
        }
        dispatch(uiActions.disableLoading());
    }
}

const unathorizedFlow = ({api}) => ({dispatch}) => next => async (action) => {
    next(action);

    if(action.type === UNAUTHORIZED) {
        try {
            dispatch(setUser({}));

            dispatch(setToken(''));

            navigationService.navigation.navigate('login');

            dispatch(uiActions.disableLoading());
        }catch(error){

        }
    }
}

export default [
    signInFlow,
    unathorizedFlow,
]