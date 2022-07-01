import React, {useEffect} from 'react';
import {Button, Container, Row, ScrollContainer} from "../../components";

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
                <Row label={'Imię klienta'} value={meeting.client.name}/>
                <Row label={'Nazwisko klienta'} value={meeting.client.surname}/>
                <Row label={'Status'} value={meeting.status.status}/>
                <Row label={'Komentarz'} value={meeting.comment}/>
                <Row label={'Komentarz po spotakniu'} value={meeting.comment_after}/>
                <Row label={'Cena'} value={meeting.price}/>
            </ScrollContainer>

            <Button title={'Edytuj'} onPress={() => navigation.navigate('editMeeting', {
                mode: 'edit',
                meeting
            })}/>
        </Container>
    );
}

export default Meeting;