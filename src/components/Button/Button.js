import React from 'react';
import {CustomButton, Text} from "./Button.css";

function Button({title, onPress}) {
    return (
        <CustomButton onPress={onPress}>
            <Text>{title}</Text>
        </CustomButton>
    );
}

export default Button;