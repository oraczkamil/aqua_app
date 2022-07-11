import React, {useCallback, useState, useReducer, useEffect} from 'react';
import {Button, Input, ScrollContainer} from "../index";
import {useFocusEffect, useNavigation} from "@react-navigation/native";
import {useDispatch, useSelector} from "react-redux";
import {ADD_MEETING, DELETE_MEETING, EDIT_MEETING} from "../../store/constants/schedule";
import reducer, {initialState} from "./reducer";
import {getAllClients} from "../../store/selectors/clients";
import {getAllStatuses} from "../../store/selectors/statuses";
import useValidation from '../../utils/hooks/useValidation';
import validationConfig from './validationConfig';
import {mapDataToSelect, dateToLocalISO} from '../../utils/helpers';

function MeetingForm({mode = 'add', meeting}) {
    const navigation = useNavigation();
    const dispatch = useDispatch();
    const validation = useValidation();

    const clients = useSelector(getAllClients);
    const statuses = useSelector(getAllStatuses);
    const [open, setOpen] = useState(false);
    const [openStatus, setOpenStatus] = useState(false);
    const [client, setClient] = useState(null);
    const [status, setStatus] = useState(null);

    const [state, dispatchMeeting] = useReducer(reducer, initialState);

    const {rules, messages} = validationConfig;

    const showDatePicker = () => {
        dispatchMeeting({type: 'setDatePickerVisibility'});
    };

    const hideDatePicker = () => {
        dispatchMeeting({type: 'setDatePickerVisibility'});
    };

    const showTimePicker = () => {
        dispatchMeeting({type: 'setTimePickerVisibility'});
    };

    const hideTimePicker = () => {
        dispatchMeeting({type: 'setTimePickerVisibility'});
    };

    const handleConfirm = (date) => {
        dispatchMeeting({type: 'setDate', payload: date.toISOString().slice(0,10)});
        hideDatePicker();
    };

    

    const handleTimeConfirm = (time) => {
        dispatchMeeting({type: 'setHour', payload: dateToLocalISO(time).slice(11,19)});
        hideTimePicker();
    };

    const handleSave = () => {
        const data = {
            id: state.id,
            clientId: state.clientId,
            date: state.date,
            hour: state.hour,
            status: state.status,
            price: state.price,
            comment: state.comment,
            comment_after: state.commentAfter
        }

        validation.validate(rules, messages, data);

        if(validation.validate(rules, messages, data)){
            mode === 'edit'
                ? dispatch({type: EDIT_MEETING, payload: data})
                : dispatch({type: ADD_MEETING, payload: data})

            navigation.navigate('day', {date: state.date, title: state.date});
        }else{
            dispatchMeeting({type: 'setErrors', payload: validation.errors});
        }

    }

    const handleDelete = () => {
        dispatch({type: DELETE_MEETING, payload: {id: state.id, date: state.date}});
        navigation.navigate('day', {date: state.date, title: state.date});
    }

    useFocusEffect(
        useCallback(() => {
            if(mode === 'edit'){
                navigation.setOptions({
                    title: `${meeting.date} ${meeting.hour}`
                })

                dispatchMeeting({type: 'setId', payload: meeting.id});
                dispatchMeeting({type: 'setClientId', payload: meeting.client_id});
                dispatchMeeting({type: 'setDate', payload: meeting.date});
                dispatchMeeting({type: 'setHour', payload: meeting.hour});
                dispatchMeeting({type: 'setStatus', payload: meeting.status.id});
                dispatchMeeting({type: 'setComment', payload: meeting.comment});
                dispatchMeeting({type: 'setCommentAfter', payload: meeting.comment_after});
                dispatchMeeting({type: 'setPrice', payload: meeting.price});
            };
        }, [meeting])
    );

    useEffect(() => {
        if(clients.length) dispatchMeeting({type: 'setDataClients', payload: mapDataToSelect(clients, ['name', 'surname'])});
    }, [clients])

    useEffect(() => {
        if(statuses.length) dispatchMeeting({type: 'setDataStatuses', payload: mapDataToSelect(statuses, ['status'])});
    }, [statuses])

    useEffect(() => {
        if(meeting){
            dispatchMeeting({type: 'setClientId', payload: meeting.client.id});
            dispatchMeeting({type: 'setStatus', payload: meeting.status.id});
        }
    }, [meeting])

    useEffect(() => {
        if(client) dispatchMeeting({type: 'setClientId', payload: client});
    }, [client]);

    useEffect(() => {
        if(status) dispatchMeeting({type: 'setStatus', payload: status});
    }, [status]);

    return (
        <>
            <ScrollContainer>
                <Input
                    errorMessage={state.errors.clientId}
                    open={open}
                    value={client}
                    items={state.dataClients}
                    setOpen={setOpen}
                    setValue={setClient}
                    type='dropdown'
                    placeholder={
                        state.dataClients.find(item => parseInt(item.value) === parseInt(state.clientId))
                        ? state.dataClients.find(item => parseInt(item.value) === parseInt(state.clientId)).label
                        : 'Wybierz użytkownika'}
                />
                
                <Input
                    errorMessage={state.errors.date}
                    type={'datetime'}
                    label={'Data'}
                    mode={'date'}
                    onPress={showDatePicker}
                    value={state.date}
                    isVisible={state.isDatePickerVisible}
                    onConfirm={handleConfirm}
                    onCancel={hideDatePicker}
                    style={{marginTop: 20}}
                />

                <Input
                    errorMessage={state.errors.hour}
                    type={'datetime'}
                    label={'Godzina'}
                    mode={'time'}
                    onPress={showTimePicker}
                    value={state.hour}
                    isVisible={state.isTimePickerVisible}
                    onConfirm={handleTimeConfirm}
                    onCancel={hideTimePicker}
                />

                <Input
                    errorMessage={state.errors.status}
                    open={openStatus}
                    value={status}
                    items={state.dataStatuses}
                    setOpen={setOpenStatus}
                    setValue={setStatus}
                    type='dropdown'
                    placeholder={
                        state.dataStatuses.find(item => parseInt(item.value) === parseInt(state.status))
                        ? state.dataStatuses.find(item => parseInt(item.value) === parseInt(state.status)).label
                        : 'Wybierz status'}
                />

                <Input
                    label="Komentarz"
                    value={state.comment}
                    onChangeText={text => dispatchMeeting({type: 'setComment', payload: text})}
                />
                {mode === 'edit'
                    ? <Input
                        label="Komentarz po spotkaniu"
                        value={state.commentAfter}
                        onChangeText={text => dispatchMeeting({type: 'setCommentAfter', payload: text})}
                    />
                    : <></>}

                <Input
                    errorMessage={state.errors.price}
                    keyboardType="numeric"
                    label="Cena"
                    value={state.price
                        ? state.price.toString()
                        : state.price}
                    onChangeText={text => dispatchMeeting({type: 'setPrice', payload: text})} 
                />
            </ScrollContainer>

            <Button title={'Zapisz'} onPress={() => handleSave()}/>
            {mode === 'edit' ? <Button title={'Usuń'} onPress={() => handleDelete()}/> : <></>}
        </>
    );
}

export default MeetingForm;