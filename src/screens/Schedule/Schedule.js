import React, {useEffect, useState} from 'react';
import {CustomCalendar} from "./Schedule.css";
import {LocaleConfig} from 'react-native-calendars';
import {useSelector} from "react-redux";
import {getAllDays} from "../../store/selectors/schedule";
import {schedule as colors} from '../../utils/theme/colors';
import {schedule as typography} from '../../utils/theme/typography';

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
            <CustomCalendar
                markedDates={dates}
                theme={{
                    arrowColor: colors.arrowColor,
                    arrowWidth: typography.arrow,
                    arrowHeight: typography.arrow,
                    calendarBackground: colors.background,
                    textSectionTitleColor: colors.textSectionTitleColor,
                    todayTextColor: colors.todayTextColor,
                    dotColor: colors.dotColor,
                    todayTextColor: colors.todayTextColor,
                    textDayFontWeight: typography.fontWeight,
                    textMonthFontWeight: typography.fontWeight,
                    textDayHeaderFontWeight: typography.fontWeight,
                }}
                onDayPress={day => {
                    navigation.navigate('day', {date: day.dateString, title: day.dateString});
                }}
            />
        </>
    );
}

export default Schedule;