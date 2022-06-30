import React, { useCallback } from 'react';
import {Button, Container, Row, ScrollContainer} from "../../components";
import {useFocusEffect} from "@react-navigation/native";

function Client({route, navigation}) {
    const { client } = route.params;

    useFocusEffect(
        useCallback(() => {
            navigation.setOptions({
                title: `${client.name}  ${client.surname}`,
            });
        }, [client])
    );

    return (
        <Container>
            <ScrollContainer>
                <Row label={'Miasto'} value={client.city}/>
                <Row label={'Adres'} value={client.address}/>
                <Row label={'Kod pocztowy'} value={client.zip_code}/>
                <Row label={'Numer'} value={client.phone}/>
            </ScrollContainer>

            <Button title={'Edytuj'} onPress={() => navigation.navigate('editClient', {
                mode: 'edit',
                client
            })}/>
        </Container>
    );
}

export default Client;