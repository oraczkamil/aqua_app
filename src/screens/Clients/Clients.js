import React from 'react';
import {Container, ScrollContainer} from "../../components";
import {useSelector} from "react-redux";
import {getAllClients} from "../../store/selectors/clients";
import {DataTable} from "react-native-paper";

function Clients({navigation}) {
    const clients = useSelector(getAllClients);

    return (
        <Container>
            <ScrollContainer>
                {clients.map((client, index) => (
                    <DataTable.Row key={index} onPress={() => navigation.navigate('client', {client})}>
                        <DataTable.Cell>{client.name} {client.surname}</DataTable.Cell>
                    </DataTable.Row>
                ))}
            </ScrollContainer>
        </Container>
    );
}

export default Clients;