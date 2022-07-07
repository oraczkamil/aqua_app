import React from 'react';
import {Container, ScrollContainer} from "../../components";
import {useSelector} from "react-redux";
import {getAllClients} from "../../store/selectors/clients";
import {Row, Cell, Text} from './Clients.css';

function Clients({navigation}) {
    const clients = useSelector(getAllClients);

    return (
        <Container>
            <ScrollContainer>
                {clients.map((client, index) => (
                    <Row key={index} onPress={() => navigation.navigate('client', {client})}>
                        <Cell><Text>{client.name} {client.surname}</Text></Cell>
                    </Row>
                ))}
            </ScrollContainer>
        </Container>
    );
}

export default Clients;