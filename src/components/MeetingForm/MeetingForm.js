import React, {useCallback, useState, useReducer, useEffect} from 'react';
import {Button, Input, ScrollContainer} from "../index";
import {useFocusEffect, useNavigation} from "@react-navigation/native";
import {useDispatch, useSelector} from "react-redux";
import {ADD_MEETING, DELETE_MEETING, EDIT_MEETING} from "../../store/constants/schedule";
import reducer, {initialState} from "./reducer";
import {getAllClients} from "../../store/selectors/clients";
import { AutocompleteDropdown } from 'react-native-autocomplete-dropdown';
import {Text, View} from "react-native";

function MeetingForm({mode = 'add', meeting}) {
    const clients = useSelector(getAllClients);
    const navigation = useNavigation();
    const dispatch = useDispatch();
    const [state, dispatchMeeting] = useReducer(reducer, initialState);
    const [date, setDate] = React.useState(undefined);
    const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
    const [isTimePickerVisible, setTimePickerVisibility] = useState(false);
    const [dataClients, setDataClients] = useState([]);

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
                clientId: state.clientId.value,
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
        dispatch({type: DELETE_MEETING, payload: {id: state.id.value, date: state.date.value}});
        navigation.navigate('day', {date: state.date.value, title: state.date.value});
    }

    useFocusEffect(
        useCallback(() => {
            if(mode === 'edit'){
                navigation.setOptions({
                    title: `${meeting.date} ${meeting.hour}`
                })

                dispatchMeeting({type: 'setId', payload: {value: meeting.id}});
                dispatchMeeting({type: 'setClientId', payload: {value: meeting.client_id}});
                dispatchMeeting({type: 'setDate', payload: {value: meeting.date}});
                dispatchMeeting({type: 'setHour', payload: {value: meeting.hour}});
                dispatchMeeting({type: 'setStatus', payload: {value: meeting.status.status}});
                dispatchMeeting({type: 'setComment', payload: {value: meeting.comment}});
                dispatchMeeting({type: 'setCommentAfter', payload: {value: meeting.comment_after}});
                dispatchMeeting({type: 'setPrice', payload: {value: meeting.price}});
            };
        }, [meeting])
    );

    useEffect(() => {
        if(date) dispatchMeeting({type: 'setDate', payload: {value: date}});
    }, [date])

    useEffect(() => {
        if(clients.length){
            let dataTemp = [];

            clients.map(client => {
                dataTemp.push({
                    id: `${client.id}`,
                    title: `${client.name} ${client.surname}`,
                });
            })

            setDataClients(dataTemp);
        }
    }, [clients])

    return (
        <>
            <ScrollContainer>
                <AutocompleteDropdown
                    clearOnFocus={false}
                    closeOnBlur={true}
                    closeOnSubmit={false}
                    initialValue={{ 'id': '1' }}
                    // dataSet={dataClients}
                    dataSet={[
                        {
                            id: "1",
                            title: "Mr. Clyde Wunsch PhD Torpasdasd",
                        },
                        {
                            id: "2",
                            title: "Miles Goldner Hillasdasd",
                        },
                        {
                            id: "3",
                            title: "Carroll Beier MD Runte",
                        },
                        {
                            id: "4",
                            title: "fabab adbab",
                        },
                        {
                            id: "5",
                            title: "aDDFAG AGFGN",
                        },
                    ]}
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