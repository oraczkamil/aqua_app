import React from 'react';
import {ScrollView} from "react-native";

function ScrollContainer({children}) {
    return (
        <ScrollView style={{width: '100%'}}>{children}</ScrollView>
    );
}

export default ScrollContainer;