import React, {useEffect} from 'react';
import {Container, ScrollContainer} from "../../components";
import {useDispatch, useSelector} from "react-redux";
import {getAllClients} from "../../store/selectors/clients";
import {LOAD_ALL_CLIENTS} from "../../store/constants/clients";
import {DataTable} from "react-native-paper";

function Clients({navigation}) {
    const clients = useSelector(getAllClients);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch({type: LOAD_ALL_CLIENTS});
    }, []);

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