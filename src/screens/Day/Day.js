import React, {useEffect} from 'react';
import {Container, ScrollContainer} from "../../components";
import {DataTable} from "react-native-paper";
import {useDispatch, useSelector} from "react-redux";
import {getOneDay} from "../../store/selectors/schedule";
import {LOAD_ONE_DAY} from "../../store/constants/schedule";

function Day({route, navigation}) {
    const { date } = route.params;
    const day = useSelector(getOneDay);
    const dispatch = useDispatch();

    useEffect(() => {
        navigation.setOptions({
            title: date,
        });

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
                    <DataTable.Row key={index} onPress={() => navigation.navigate('meeting', {meeting})}>
                        <DataTable.Cell>{meeting.client.name}</DataTable.Cell>
                        <DataTable.Cell>{meeting.client.surname}</DataTable.Cell>
                        <DataTable.Cell>{meeting.hour}</DataTable.Cell>
                    </DataTable.Row>
                ))}
            </ScrollContainer>
        </Container>
    );
}

export default Day;