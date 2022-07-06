import {FontAwesomeIcon} from "@fortawesome/react-native-fontawesome";
import {faCalendarDays, faPlusCircle} from "@fortawesome/free-solid-svg-icons";
import {faUsers} from "@fortawesome/free-solid-svg-icons/faUsers";
import { HeaderRightButton } from "../components";

const color = (focused) => {
    return focused ? 'rgb(0, 122, 255)' : 'rgb(142, 142, 143)';
}

const config = {
    schedule: {
        title: 'Grafik',
        tabBarIcon: ({focused}) => (
            <FontAwesomeIcon icon={faCalendarDays} color={color(focused)}/>
        ),
        headerRight: () => (<HeaderRightButton icon={faPlusCircle} routeName={'addMeeting'} />)
    },
    addMeeting: {
        title: 'Dodaj spotkanie',
        tabBarButton: () => null,
    },
    editMeeting: {
        title: 'Edytuj spotkanie',
        tabBarButton: () => null,
    },
    day: {
        title: 'Dzień',
        tabBarButton: () => null,
    },
    meeting: {
        title: 'Spotkanie',
        tabBarButton: () => null,
    },
    client: {
        title: 'Klient',
        tabBarButton: () => null,
    },
    clients: {
        title: 'Klienci',
        tabBarIcon: ({focused}) => (
            <FontAwesomeIcon icon={faUsers} color={color(focused)}/>
        ),
        headerRight: () => (<HeaderRightButton icon={faPlusCircle} routeName={'addClient'} />)
    },
    addClient: {
        title: 'Dodaj klienta',
        tabBarButton: () => null,
    },
    editClient: {
        title: 'Edytuj klienta',
        tabBarButton: () => null,
    },
}

export default config;