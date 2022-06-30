import { DISABLE_LOADING, ENABLE_LOADING } from "../constants/ui";

export const disableLoading = loading => ({ type: DISABLE_LOADING, payload: loading });

export const enableLoading = loading => ({ type: ENABLE_LOADING, payload: loading });