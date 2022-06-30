import React from 'react';
import {Container, MeetingForm} from "../../components";

function EditMeeting({route}) {
    const { mode, meeting } = route.params;

    return (
        <Container>
            <MeetingForm mode={mode} meeting={meeting}/>
        </Container>
    );
}

export default EditMeeting;