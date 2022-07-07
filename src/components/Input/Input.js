import React from 'react';
import {TextInput} from './Input.css';
import {input} from "../../utils/theme/colors";
import {Pressable, View} from "react-native";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import Error from "../Error";
import DropDownPicker from 'react-native-dropdown-picker';

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
                        borderWidth: 1,
                        marginTop: -20
                    }, props.style
                ]}
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
                <DropDownPicker
                    {...props}
                    searchable={true}
                    style={{
                        fontSize: 16,
                    }}
                />
            </View>
        </>
    );
}

export default Input;