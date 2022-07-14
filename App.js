import Navigation from "./src/navigation";
import {Provider, useDispatch, useSelector} from "react-redux";
import configureStore from './store/configureStore';
import { SafeAreaProvider } from "react-native-safe-area-context";
import { useEffect } from "react";
import { LOAD_ALL_CLIENTS } from "./src/store/constants/clients";
import { LOAD_ALL_STATUSES } from "./src/store/constants/statuses";
import {getToken} from "./src/store/selectors/security";

export const store = configureStore()

export default function App() {
    return (
        <Provider store={ store }>
            <Preload>
                <Navigation />
            </Preload>
        </Provider>
    );
}

const Preload = ({children}) => {
    const dispatch = useDispatch();
    const token = useSelector(getToken);

    useEffect(() => {
        if(token){
            dispatch({type: LOAD_ALL_CLIENTS});
            dispatch({type: LOAD_ALL_STATUSES});
        }
    }, [token]);

    return (
        <SafeAreaProvider>
            {children}
        </SafeAreaProvider>
    );
}