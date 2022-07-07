import {FontAwesomeIcon} from "@fortawesome/react-native-fontawesome";
import {faCalendarDays, faPlusCircle} from "@fortawesome/free-solid-svg-icons";
import {faUsers} from "@fortawesome/free-solid-svg-icons/faUsers";
import { HeaderRightButton } from "../components";
import {navigation as colors} from '../utils/theme/colors';
import {navigation as typography} from '../utils/theme/typography';

const color = (focused) => {
    return focused ? colors.focusedColor : colors.color;
}

const dontDisplay = title => ({
    title: title,
    tabBarButton: () => null,
});

const display = (title, icon, headerIcon, routeName) => ({
    title: title,
        tabBarIcon: ({focused}) => (
            <FontAwesomeIcon icon={icon} color={color(focused)} size={typography.iconSize} />
        ),
        tabBarStyles: {color: colors.color},
        headerRight: () => (<HeaderRightButton icon={headerIcon} routeName={routeName} color={colors.focusedColor} size={typography.iconSize} />),
        tabBarLabelStyle: {display: 'none'},
});

const config = {
    schedule: display('Grafik', faCalendarDays, faPlusCircle, 'addMeeting'),
    clients: display('Klienci', faUsers, faPlusCircle, 'addClient'),
    addMeeting: dontDisplay('Dodaj spotkanie'),
    editMeeting: dontDisplay('Edytuj spotkanie'),
    day: dontDisplay('Dzień'),
    meeting: dontDisplay('Spotkanie'),
    client: dontDisplay('Klient'),
    addClient: dontDisplay('Dodaj klienta'),
    editClient: dontDisplay('Edytuj klienta'),
}

export default config;