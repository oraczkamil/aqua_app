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

        return !errors.length;
    }

    const handleSave = () => {
        if(validate()){
            const data = {
                id: state.id.value,
                name: state.name.value,
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
                />
            </ScrollContainer>

            <Button title={'Zapisz'} onPress={() => handleSave()}/>
            {mode === 'edit' ? <Button title={'Usuń'} onPress={() => handleDelete()}/> : <></>}
        </>
    );
}

export default ClientForm;