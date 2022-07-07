import React, { useCallback } from 'react';
import {Button, Container, DatatableRow, ScrollContainer} from "../../components";
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
                <DatatableRow label={'Miasto'} value={client.city}/>
                <DatatableRow label={'Ulica'} value={client.street}/>
                <DatatableRow label={'Kod pocztowy'} value={client.zip_code}/>
                <DatatableRow label={'Numer'} value={client.phone}/>
            </ScrollContainer>

            <Button title={'Edytuj'} onPress={() => navigation.navigate('editClient', {
                mode: 'edit',
                client
            })}/>
        </Container>
    );
}

export default Client;