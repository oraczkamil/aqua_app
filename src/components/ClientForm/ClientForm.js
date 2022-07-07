import React, { useReducer, useCallback } from 'react';
import {useFocusEffect, useNavigation} from "@react-navigation/native";
import {useDispatch} from "react-redux";
import {Button, Input, ScrollContainer} from "../index";
import reducer, {initialState} from "./reducer";
import {ADD_CLIENT, DELETE_CLIENT, EDIT_CLIENT} from "../../store/constants/clients";
import useValidation from '../../utils/hooks/useValidation';
import validationConfig from './validationConfig';

function ClientForm({mode = 'add', client}) {
    const navigation = useNavigation();
    const dispatch = useDispatch();
    const validation = useValidation();

    const [state, dispatchMeeting] = useReducer(reducer, initialState);

    const {rules, messages} = validationConfig;

    const handleSave = () => {
        const data = {
            id: state.id,
            name: state.name,
            surname: state.surname,
            city: state.city,
            street: state.street,
            zip_code: state.zip_code,
            phone: state.phone,
        }

        validation.validate(rules, messages, data);

        if(validation.validate(rules, messages, data)){
            mode === 'edit'
                ? dispatch({type: EDIT_CLIENT, payload: data})
                : dispatch({type: ADD_CLIENT, payload: data})

            navigation.navigate('clients');
        }else{
            dispatchMeeting({type: 'setErrors', payload: validation.errors});
        }
    }

    const handleDelete = () => {
        dispatch({type: DELETE_CLIENT, payload: state.id});
        navigation.navigate('clients');
    }

    useFocusEffect(
        useCallback(() => {
            if(mode === 'edit'){
                navigation.setOptions({
                    title: `${client.name}`
                })

                dispatchMeeting({type: 'setId', payload: client.id});
                dispatchMeeting({type: 'setName', payload: client.name});
                dispatchMeeting({type: 'setSurname', payload: client.surname});
                dispatchMeeting({type: 'setCity', payload: client.city});
                dispatchMeeting({type: 'setStreet', payload: client.street});
                dispatchMeeting({type: 'setZipCode', payload: client.zip_code});
                dispatchMeeting({type: 'setPhone', payload: client.phone});
            };
        }, [client])
    );

    return (
        <>
            <ScrollContainer>
                <Input
                    errorMessage={state.errors.name}
                    label="Imię"
                    value={state.name}
                    onChangeText={text => dispatchMeeting({type: 'setName', payload: text})}
                />

                <Input
                    errorMessage={state.errors.surname}
                    label="Nazwisko"
                    value={state.surname}
                    onChangeText={text => dispatchMeeting({type: 'setSurname', payload: text})}
                />

                <Input
                    errorMessage={state.errors.city}
                    label="Miasto"
                    value={state.city}
                    onChangeText={text => dispatchMeeting({type: 'setCity', payload: text})}
                />

                <Input
                    errorMessage={state.errors.street}
                    label="Adres"
                    value={state.street}
                    onChangeText={text => dispatchMeeting({type: 'setStreet', payload: text})}
                />

                <Input
                    errorMessage={state.errors.zip_code}
                    label="Kod pocztowy"
                    value={state.zip_code}
                    onChangeText={text => dispatchMeeting({type: 'setZipCode', payload: text})}
                    keyboardType="numeric"
                />

                <Input
                    errorMessage={state.errors.phone}
                    label="Numer"
                    value={state.phone}
                    onChangeText={text => dispatchMeeting({type: 'setPhone', payload: text})}
                    keyboardType="numeric"
                />
            </ScrollContainer>

            <Button title={'Zapisz'} onPress={() => handleSave()}/>
            {mode === 'edit' ? <Button title={'Usuń'} onPress={() => handleDelete()}/> : <></>}
        </>
    );
}

export default ClientForm;