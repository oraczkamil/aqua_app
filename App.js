import Navigation from "./src/navigation";
import {Provider, useDispatch} from "react-redux";
import configureStore from './store/configureStore';
import { SafeAreaProvider } from "react-native-safe-area-context";
import { useEffect } from "react";
import { LOAD_ALL_DAYS } from "./src/store/constants/schedule";
import { LOAD_ALL_CLIENTS } from "./src/store/constants/clients";
import { LOAD_ALL_STATUSES } from "./src/store/constants/statuses";

const store = configureStore()

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

    useEffect(() => {
        dispatch({type: LOAD_ALL_DAYS});
        dispatch({type: LOAD_ALL_CLIENTS});
        dispatch({type: LOAD_ALL_STATUSES});
    }, []);

    return (
        <SafeAreaProvider>
            {children}
        </SafeAreaProvider>
    );
}