import React, {useEffect} from 'react';
import {Button, Container, DatatableRow, ScrollContainer} from "../../components";

function Meeting({route, navigation}) {
    const { meeting } = route.params;

    useEffect(() => {
        navigation.setOptions({
            title: `${meeting.date} ${meeting.hour}`,
        });
    }, [])

    return (
        <Container>
            <ScrollContainer>
                <DatatableRow label={'Imię'} value={meeting.client.name}/>
                <DatatableRow label={'Nazwisko'} value={meeting.client.surname}/>
                <DatatableRow label={'Ulica'} value={meeting.client.street}/>
                <DatatableRow label={'Miasto'} value={meeting.client.city}/>
                <DatatableRow label={'Kod pocztowy'} value={meeting.client.zip_code}/>
                <DatatableRow label={'Numer telefonu'} value={meeting.client.phone}/>
                <DatatableRow label={'Status'} value={meeting.status.status}/>
                <DatatableRow label={'Komentarz'} value={meeting.comment}/>
                <DatatableRow label={'Komentarz po spotakniu'} value={meeting.comment_after}/>
                <DatatableRow label={'Cena'} value={meeting.price}/>
            </ScrollContainer>

            <Button title={'Edytuj'} onPress={() => navigation.navigate('editMeeting', {
                mode: 'edit',
                meeting
            })}/>
        </Container>
    );
}

export default Meeting;