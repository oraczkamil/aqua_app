import {createStore, combineReducers, applyMiddleware} from 'redux';
import uiReducer from "../src/store/reducers/ui";
import securityReducer from "../src/store/reducers/security";
import middlewares from "../src/store/middlewares";
import services from "../src/store/services";
import scheduleReducer from "../src/store/reducers/schedule";
import clientsReducer from "../src/store/reducers/clients";
import statusesReducer from "../src/store/reducers/statuses";

const rootReducer = combineReducers(
    {
        ui: uiReducer,
        security: securityReducer,
        schedule: scheduleReducer,
        clients: clientsReducer,
        statuses: statusesReducer,
    }
);

export const configureStore = () => createStore(
    rootReducer,
    applyMiddleware(...middlewares.map(f => f(services)))
);
export default configureStore;