import React, { useReducer, useCallback } from 'react';
import {useFocusEffect, useNavigation} from "@react-navigation/native";
import {useDispatch} from "react-redux";
import {Button, Input, ScrollContainer} from "../index";
import reducer, {initialState} from "./reducer";
import {ADD_CLIENT, DELETE_CLIENT, EDIT_CLIENT} from "../../store/constants/clients";

function ClientForm({mode = 'add', client}) {
    const navigation = useNavigation();
    const dispatch = useDispatch();
    const [state, dispatchMeeting] = useReducer(reducer, initialState);

    const validate = () => {
        let errors = [];

        if(!state.name.value) { dispatchMeeting({type: 'setName', payload: {error: 'Imię jest wymagane'}}); errors.push('name') }
        else errors.filter(error => error !== 'name');

        if(!state.surname.value) { dispatchMeeting({type: 'setSurname', payload: {error: 'Nazwisko jest wymagane'}}); errors.push('surname') }
        else errors.filter(error => error !== 'surname');

        if(!state.city.value) { dispatchMeeting({type: 'setCity', payload: {error: 'Miasto jest wymagane'}}); errors.push('city') }
        else errors.filter(error => error !== 'name');

        if(!state.street.value) { dispatchMeeting({type: 'setStreet', payload: {error: 'Adres jest wymagany'}}); errors.push('street') }
        else errors.filter(error => error !== 'street');

        if(!state.zip_code.value) { dispatchMeeting({type: 'setZipCode', payload: {error: 'Kod pocztowy jest wymagany'}}); errors.push('zip_code') }
        else errors.filter(error => error !== 'zip_code');

        if(!state.phone.value) { dispatchMeeting({type: 'setPhone', payload: {error: 'Numer jest wymagany'}}); errors.push('phone') }
        else errors.filter(error => error !== 'phone');

        return !errors.length;
    }

    const handleSave = () => {
        if(validate()){
            const data = {
                id: state.id.value,
                name: state.name.value,
                surname: state.surname.value,
                city: state.city.value,
                street: state.street.value,
                zip_code: state.zip_code.value,
                phone: state.phone.value,
            }

            mode === 'edit'
                ? dispatch({type: EDIT_CLIENT, payload: data})
                : dispatch({type: ADD_CLIENT, payload: data})

            navigation.navigate('clients');
        }
    }

    const handleDelete = () => {
        dispatch({type: DELETE_CLIENT, payload: state.id.value});
        navigation.navigate('clients');
    }

    useFocusEffect(
        useCallback(() => {
            if(mode === 'edit'){
                navigation.setOptions({
                    title: `${client.name}`
                })

                dispatchMeeting({type: 'setId', payload: {value: client.id}});
                dispatchMeeting({type: 'setName', payload: {value: client.name}});
                dispatchMeeting({type: 'setSurname', payload: {value: client.surname}});
                dispatchMeeting({type: 'setCity', payload: {value: client.city}});
                dispatchMeeting({type: 'setStreet', payload: {value: client.street}});
                dispatchMeeting({type: 'setZipCode', payload: {value: client.zip_code}});
                dispatchMeeting({type: 'setPhone', payload: {value: client.phone}});
            };
        }, [client])
    );

    return (
        <>
            <ScrollContainer>
                <Input
                    errorMessage={state.name.error}
                    label="Imię"
                    value={state.name.value}
                    onChangeText={text => dispatchMeeting({type: 'setName', payload: {value: text}})}
                    style={{marginTop: 0}}
                />

                <Input
                    errorMessage={state.surname.error}
                    label="Nazwisko"
                    value={state.surname.value}
                    onChangeText={text => dispatchMeeting({type: 'setSurname', payload: {value: text}})}
                />

                <Input
                    errorMessage={state.city.error}
                    label="Miasto"
                    value={state.city.value}
                    onChangeText={text => dispatchMeeting({type: 'setCity', payload: {value: text}})}
                />

                <Input
                    errorMessage={state.street.error}
                    label="Adres"
                    value={state.street.value}
                    onChangeText={text => dispatchMeeting({type: 'setStreet', payload: {value: text}})}
                />

                <Input
                    errorMessage={state.zip_code.error}
                    label="Kod pocztowy"
                    value={state.zip_code.value}
                    onChangeText={text => dispatchMeeting({type: 'setZipCode', payload: {value: text}})}
                    keyboardType="numeric"
                />

                <Input
                    errorMessage={state.phone.error}
                    label="Numer"
                    value={state.phone.value}
                    onChangeText={text => dispatchMeeting({type: 'setPhone', payload: {value: text}})}
                    keyboardType="numeric"
                />
            </ScrollContainer>

            <Button title={'Zapisz'} onPress={() => handleSave()}/>
            {mode === 'edit' ? <Button title={'Usuń'} onPress={() => handleDelete()}/> : <></>}
        </>
    );
}

export default ClientForm;