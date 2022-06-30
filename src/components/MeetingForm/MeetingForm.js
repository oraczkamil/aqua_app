import React, {useCallback, useState, useReducer, useEffect} from 'react';
import {Button, Input, ScrollContainer} from "../index";
import {useFocusEffect, useNavigation} from "@react-navigation/native";
import {useDispatch} from "react-redux";
import {ADD_MEETING, DELETE_MEETING, EDIT_MEETING} from "../../store/constants/schedule";
import reducer, {initialState} from "./reducer";

function MeetingForm({mode = 'add', meeting}) {
    const navigation = useNavigation();
    const dispatch = useDispatch();
    const [state, dispatchMeeting] = useReducer(reducer, initialState);
    const [date, setDate] = React.useState(undefined);
    const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
    const [isTimePickerVisible, setTimePickerVisibility] = useState(false);

    const showDatePicker = () => {
        setDatePickerVisibility(true);
    };

    const hideDatePicker = () => {
        setDatePickerVisibility(false);
    };

    const showTimePicker = () => {
        setTimePickerVisibility(true);
    };

    const hideTimePicker = () => {
        setTimePickerVisibility(false);
    };

    const handleConfirm = (date) => {
        dispatchMeeting({type: 'setDate', payload: {value: date.toISOString().slice(0,10)}});
        hideDatePicker();
    };

    const handleTimeConfirm = (time) => {
        dispatchMeeting({type: 'setHour', payload: {value: time.toISOString().slice(11,19)}});
        hideTimePicker();
    };

    const validate = () => {
        let errors = [];

        if(!state.firstname.value) { dispatchMeeting({type: 'setFirstname', payload: {error: 'Imię jest wymagane'}}); errors.push('firstname') }
        else errors.filter(error => error !== 'firstname');
        if(!state.lastname.value) { dispatchMeeting({type: 'setLastname', payload: {error: 'Nazwisko jest wymagane'}}); errors.push('lastname') }
        else errors.filter(error => error !== 'lastname');
        if(!state.date.value) { dispatchMeeting({type: 'setDate', payload: {error: 'Data jest wymagana'}}); errors.push('date') }
        else errors.filter(error => error !== 'date');
        if(!state.hour.value) { dispatchMeeting({type: 'setHour', payload: {error: 'Godzina jest wymagana'}}); errors.push('hour') }
        else errors.filter(error => error !== 'hour');
        if(!state.status.value) { dispatchMeeting({type: 'setStatus', payload: {error: 'Status jest wymagany'}}); errors.push('status') }
        else errors.filter(error => error !== 'status');
        if(!state.price.value) { dispatchMeeting({type: 'setPrice', payload: {error: 'Cena jest wymagana'}}); errors.push('price') }
        else errors.filter(error => error !== 'price');

        return !errors.length;
    }

    const handleSave = () => {
        if(validate()){
            const data = {
                id: state.id.value,
                firstname: state.firstname.value,
                lastname: state.lastname.value,
                date: state.date.value,
                hour: state.hour.value,
                status: state.status.value,
                comment: state.comment.value,
                commentAfter: state.commentAfter.value,
                price: state.price.value,
            }

            mode === 'edit'
                ? dispatch({type: EDIT_MEETING, payload: data})
                : dispatch({type: ADD_MEETING, payload: data})

            navigation.navigate('day', {date: state.date.value, title: state.date.value});
        }
    }

    const handleDelete = () => {
        dispatch({type: DELETE_MEETING, payload: state.id.value});
        navigation.navigate('day', {date: state.date.value, title: state.date.value});
    }

    useFocusEffect(
        useCallback(() => {
            if(mode === 'edit'){
                navigation.setOptions({
                    title: `${meeting.date} ${meeting.hour}`
                })

                dispatchMeeting({type: 'setId', payload: {value: meeting.id}});
                dispatchMeeting({type: 'setFirstname', payload: {value: meeting.firstname}});
                dispatchMeeting({type: 'setLastname', payload: {value: meeting.lastname}});
                dispatchMeeting({type: 'setDate', payload: {value: meeting.date}});
                dispatchMeeting({type: 'setHour', payload: {value: meeting.hour}});
                dispatchMeeting({type: 'setStatus', payload: {value: meeting.status}});
                dispatchMeeting({type: 'setComment', payload: {value: meeting.comment}});
                dispatchMeeting({type: 'setCommentAfter', payload: {value: meeting.commentAfter}});
                dispatchMeeting({type: 'setPrice', payload: {value: meeting.price}});
            };
        }, [meeting])
    );

    useEffect(() => {
        if(date) dispatchMeeting({type: 'setDate', payload: {value: date}});
    }, [date])

    return (
        <>
            <ScrollContainer>
                <Input
                    errorMessage={state.firstname.error}
                    label="Imię"
                    value={state.firstname.value}
                    onChangeText={text => dispatchMeeting({type: 'setFirstname', payload: {value: text}})}
                />

                <Input
                    errorMessage={state.lastname.error}
                    label="Nazwisko"
                    value={state.lastname.value}
                    onChangeText={text => dispatchMeeting({type: 'setLastname', payload: {value: text}})}
                />

                <Input
                    errorMessage={state.date.error}
                    type={'datetime'}
                    label={'Data'}
                    mode={'date'}
                    onPress={showDatePicker}
                    value={state.date.value}
                    isVisible={isDatePickerVisible}
                    onConfirm={handleConfirm}
                    onCancel={hideDatePicker}
                />

                <Input
                    errorMessage={state.hour.error}
                    type={'datetime'}
                    label={'Godzina'}
                    mode={'time'}
                    onPress={showTimePicker}
                    value={state.hour.value}
                    isVisible={isTimePickerVisible}
                    onConfirm={handleTimeConfirm}
                    onCancel={hideTimePicker}
                />

                <Input
                    errorMessage={state.status.error}
                    label="Status"
                    value={state.status.value}
                    onChangeText={text => dispatchMeeting({type: 'setStatus', payload: {value: text}})}
                />

                <Input
                    label="Komentarz"
                    value={state.comment.value}
                    onChangeText={text => dispatchMeeting({type: 'setComment', payload: {value: text}})}
                />
                {mode === 'edit'
                    ? <Input
                        label="Komentarz po spotkaniu"
                        value={state.commentAfter.value}
                        onChangeText={text => dispatchMeeting({type: 'setCommentAfter', payload: {value: text}})}
                    />
                    : <></>}

                <Input
                    errorMessage={state.price.error}
                    keyboardType="numeric"
                    label="Cena"
                    value={state.price.value
                        ? state.price.value.toString()
                        : state.price.value}
                    onChangeText={text => dispatchMeeting({type: 'setPrice', payload: {value: text}})} />
            </ScrollContainer>

            <Button title={'Zapisz'} onPress={() => handleSave()}/>
            {mode === 'edit' ? <Button title={'Usuń'} onPress={() => handleDelete()}/> : <></>}
        </>
    );
}

export default MeetingForm;