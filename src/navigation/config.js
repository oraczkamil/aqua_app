import {FontAwesomeIcon} from "@fortawesome/react-native-fontawesome";
import {faCalendarDays, faPlusCircle} from "@fortawesome/free-solid-svg-icons";
import {faUsers} from "@fortawesome/free-solid-svg-icons/faUsers";

const color = (focused) => {
    return focused ? 'rgb(0, 122, 255)' : 'rgb(142, 142, 143)';
}

const config = {
    schedule: {
        title: 'Grafik',
        tabBarIcon: ({focused}) => (
            <FontAwesomeIcon icon={faCalendarDays} color={color(focused)}/>
        )
    },
    addMeeting: {
        title: 'Dodaj spotkanie',
        tabBarIcon: ({focused}) => (
            <FontAwesomeIcon icon={faPlusCircle} color={color(focused)}/>
        )
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
        )
    },
    addClient: {
        title: 'Dodaj klienta',
        tabBarIcon: ({focused}) => (
            <FontAwesomeIcon icon={faPlusCircle} color={color(focused)}/>
        )
    },
    editClient: {
        title: 'Edytuj klienta',
        tabBarButton: () => null,
    },
}

export default config;