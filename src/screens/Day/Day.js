import React, {useCallback, useEffect, Fragment} from 'react';
import {Container, ScrollContainer} from "../../components";
import {DataTable} from "react-native-paper";
import {useDispatch, useSelector} from "react-redux";
import {getOneDay} from "../../store/selectors/schedule";
import {LOAD_ONE_DAY} from "../../store/constants/schedule";
import { useFocusEffect } from '@react-navigation/native';
import {Row, Cell, Text} from './Day.css';

function Day({route, navigation}) {
    const { date } = route.params;
    const day = useSelector(getOneDay);
    const dispatch = useDispatch();

    useFocusEffect(
        useCallback(() => {
            navigation.setOptions({
                title: date,
            });
        }, [date])
    )

    useEffect(() => {
        dispatch({type: LOAD_ONE_DAY, payload: date});
    }, [date])

    return (
        <Container>
            <ScrollContainer>
                <DataTable.Header>
                    <DataTable.Title>Imię</DataTable.Title>
                    <DataTable.Title>Nazwisko</DataTable.Title>
                    <DataTable.Title>Godzina</DataTable.Title>
                </DataTable.Header>
                {day.map((meeting, index) => (
                    !meeting.client ? <Fragment key={index}></Fragment> :
                    <Row key={index} onPress={() => navigation.navigate('meeting', {meeting})}>
                        <Cell><Text>{meeting.client.name}</Text></Cell>
                        <Cell><Text>{meeting.client.surname}</Text></Cell>
                        <Cell><Text>{meeting.hour}</Text></Cell>
                    </Row>
                ))}
            </ScrollContainer>
        </Container>
    );
}

export default Day;