import React, {useEffect, useState} from 'react';
import {Calendar} from "react-native-calendars/src/index";
import styles from "./Schedule.css";
import {LocaleConfig} from 'react-native-calendars';
import {useSelector} from "react-redux";
import {getAllDays} from "../../store/selectors/schedule";

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
    const [dates, setDates] = useState({});

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