import React from 'react';
import {TextInput} from './Input.css';
import {input} from "../../utils/theme/colors";
import {Pressable, View} from "react-native";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import Error from "../Error";
import { DropDown } from './Input.css';
import { input as colors } from '../../utils/theme/colors';
import { input as typography } from '../../utils/theme/typography';

function Input(props) {
    switch (props.type){
        case 'text': return getTextInput(props);
        case 'datetime': return getDateTimeInput(props);
        case 'dropdown': return getDropdownPicker(props);
        case 'login': return getLoginInput(props);
        default: return getTextInput(props);
    }
}

const getLoginInput = (props) => {
    return (
        <>
            <Error message={props.errorMessage} />
            <TextInput
                {...props}
                theme={{
                    colors: {
                        primary: input.primary,
                    },
                }}
                underlineColor='transparent'
            />
        </>
    );
}

const getTextInput = (props) => {
    return (
        <>
            <Error message={props.errorMessage} />
            <TextInput
                {...props}
                theme={{
                    colors: {
                        primary: input.primary,
                        placeholder: input.borderColor,
                    }
                }}
                underlineColor={input.borderColor}
                style={[
                    {
                        flex: 1,
                        height: 60,
                        justifyContent:"center",
                    }, props.style
                ]}
                multiline
                maxLength={255}
            />
        </>
    );
}

const getDateTimeInput = (props) => {
    return (
        <>
            <Error message={props.errorMessage} />
            <Pressable onPress={props.onPress}
                style={[
                    {
                        
                    },props.style
                ]}
            >
                <Input label={props.label} value={props.value} editable={false} />
            </Pressable>
            <DateTimePickerModal
                isVisible={props.isVisible}
                mode={props.mode}
                onConfirm={props.onConfirm}
                onCancel={props.onCancel}
            />
        </>
    );
}

const getDropdownPicker = (props) => {
    return (
        <>
            <Error message={props.errorMessage} />
            <View>
                <DropDown
                    {...props}
                    searchable={true}
                    dropDownContainerStyle={{
                        backgroundColor: colors.dropdownBackground,
                        borderColor: colors.dropdownBorderColor,
                    }}
                    searchPlaceholder="Nazwa użytkownika"
                    searchContainerStyle={{
                        borderBottomColor: colors.dropdownBorderColor,
                    }}
                    listMode="MODAL"
                />
            </View>
        </>
    );
}

export default Input;