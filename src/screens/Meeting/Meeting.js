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
                <Row label={'Imię klienta'} value={meeting.firstname}/>
                <Row label={'Nazwisko klienta'} value={meeting.lastname}/>
                <Row label={'Status'} value={meeting.status}/>
                <Row label={'Komentarz'} value={meeting.comment}/>
                <Row label={'Komentarz po spotakniu'} value={meeting.commentAfter}/>
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