import React from 'react';
import {TextInput} from "react-native-paper";
import {input} from "../../utils/theme/colors";
import {Pressable} from "react-native";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import Error from "../Error";

function Input(props) {
    switch (props.type){
        case 'text':
            return getTextInput(props);
        case 'datetime':
            return getDateTimeInput(props);
        default:
            return getTextInput(props);
    }
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
                    },
                }}
                style={{
                    backgroundColor: input.background,
                    ...props.style
                }}
            />
        </>
    );
}

const getDateTimeInput = (props) => {
    return (
        <>
            <Error message={props.errorMessage} />
            <Pressable onPress={props.onPress}>
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

export default Input;