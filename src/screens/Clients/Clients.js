import React, {useCallback} from 'react';
import {Container, ScrollContainer} from "../../components";
import {useDispatch, useSelector} from "react-redux";
import {getAllClients} from "../../store/selectors/clients";
import {LOAD_ALL_CLIENTS} from "../../store/constants/clients";
import {DataTable} from "react-native-paper";
import {useFocusEffect} from "@react-navigation/native";

function Clients({navigation}) {
    const clients = useSelector(getAllClients);
    const dispatch = useDispatch();

    useFocusEffect(
        useCallback(() => {
            dispatch({type: LOAD_ALL_CLIENTS});
        }, [])
    );

    console.log(clients);

    return (
        <Container>
            <ScrollContainer>
                {clients.map((client, index) => (
                    <DataTable.Row key={index} onPress={() => navigation.navigate('client', {client})}>
                        <DataTable.Cell>{client.name} {client.name}</DataTable.Cell>
                    </DataTable.Row>
                ))}
            </ScrollContainer>
        </Container>
    );
}

export default Clients;