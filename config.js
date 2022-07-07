import { Platform } from "react-native";
import { REACT_APP_API_URL_WEB, REACT_APP_API_URL_MOBILE } from '@env';

export default {
    // url: Platform.OS === 'web' ? REACT_APP_API_URL_WEB : REACT_APP_API_URL_MOBILE,
    url: 'https://aqua-crm.pl/api',
    // url: 'http://127.0.0.1:8000/api',
}