import React from 'react';
import {ClientForm, Container} from "../../components";

function EditClient({route}) {
    const { mode, client } = route.params;

    return (
        <Container>
            <ClientForm mode={mode} client={client}/>
        </Container>
    );
}

export default EditClient;