import React, { useCallback } from 'react';
import {Button, Container, Row, ScrollContainer} from "../../components";
import {useFocusEffect} from "@react-navigation/native";

function Client({route, navigation}) {
    const { client } = route.params;

    useFocusEffect(
        useCallback(() => {
            navigation.setOptions({
                title: client.name,
            });
        }, [client])
    );

    return (
        <Container>
            <ScrollContainer>
                <Row label={'Imię'} value={client.name}/>
            </ScrollContainer>

            <Button title={'Edytuj'} onPress={() => navigation.navigate('editClient', {
                mode: 'edit',
                client
            })}/>
        </Container>
    );
}

export default Client;