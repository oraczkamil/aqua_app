import React, {useEffect, useState} from 'react';
import {Calendar} from "react-native-calendars/src/index";
import styles from "./Schedule.css";
import {LocaleConfig} from 'react-native-calendars';
import {useDispatch, useSelector} from "react-redux";
import {LOAD_ALL_DAYS} from "../../store/constants/schedule";
import {getAllDays} from "../../store/selectors/schedule";
import {LOAD_ALL_CLIENTS} from "../../store/constants/clients";

LocaleConfig.locales['pl'] = {
    monthNames: [
        'Styczeń',
        'Luty',
        'Marzec',
        'Kwiecień',
        'Maj',
        'Czerwiec',
        'Lipiec',
        'Sierpień',
        'Wrzesień',
        'Październik',
        'Listopad',
        'Grudzień'
    ],
    monthNamesShort: ['Sty.', 'Lut.', 'Mar', 'Kwi', 'Maj', 'Cze', 'Lip.', 'Sie', 'Wrz.', 'Paż.', 'Lis.', 'Gru.'],
    dayNames: ['Poniedziałek', 'Wtorek', 'Środa', 'Czwartek', 'Piątek', 'Sobota', 'Niedziela'],
    dayNamesShort: ['Pon.', 'Wto.', 'Śro.', 'Czw.', 'Pią.', 'Sob.', 'Nie.'],
    today: "Dzisiaj"
};
LocaleConfig.defaultLocale = 'pl';

function Schedule({navigation}) {
    const days = useSelector(getAllDays);
    const dispatch = useDispatch();
    const [dates, setDates] = useState({});

    useEffect(() => {
        dispatch({type: LOAD_ALL_DAYS});
        dispatch({type: LOAD_ALL_CLIENTS});
    }, [])

    useEffect(() => {
        let datesTemp = {};

        days.map(day => {
            datesTemp[day.date] = {marked: true};
        });

        setDates(datesTemp);
    }, [days])

    return (
        <>
            <Calendar
                style={styles.calendar}
                markedDates={dates}
                theme={{
                    arrowColor: '#000',
                    arrowWidth: 30,
                    arrowHeight: 30
                }}
                onDayPress={day => {
                    navigation.navigate('day', {date: day.dateString, title: day.dateString});
                }}
            />
        </>
    );
}

export default Schedule;