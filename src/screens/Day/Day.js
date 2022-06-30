import React, {useCallback} from 'react';
import {Container, ScrollContainer} from "../../components";
import {DataTable} from "react-native-paper";
import {useDispatch, useSelector} from "react-redux";
import {getOneDay} from "../../store/selectors/schedule";
import {LOAD_ONE_DAY} from "../../store/constants/schedule";
import {useFocusEffect} from "@react-navigation/native";

function Day({route, navigation}) {
    const { date } = route.params;
    const day = useSelector(getOneDay);
    const dispatch = useDispatch();

    useFocusEffect(
        useCallback(() => {
            navigation.setOptions({
                title: date,
            });

            dispatch({type: LOAD_ONE_DAY});
        }, [])
    );

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
                        <DataTable.Cell>{meeting.firstname}</DataTable.Cell>
                        <DataTable.Cell>{meeting.lastname}</DataTable.Cell>
                        <DataTable.Cell>{meeting.hour}</DataTable.Cell>
                    </DataTable.Row>
                ))}
            </ScrollContainer>
        </Container>
    );
}

export default Day;