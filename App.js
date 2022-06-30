import Navigation from "./src/navigation";
import {Provider} from "react-redux";

import configureStore from './store/configureStore';

const store = configureStore()

export default function App() {
    return (
        <Provider store={ store }>
            <Navigation />
        </Provider>
    );
}