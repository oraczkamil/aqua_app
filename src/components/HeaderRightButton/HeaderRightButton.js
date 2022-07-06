import React from 'react';
import { Pressable } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { useNavigation } from '@react-navigation/native';

const HeaderRightButton = ({icon, routeName}) => {
    const navigation = useNavigation();

    return (
        <Pressable onPress={() => navigation.navigate(routeName)} style={{marginRight: 20}}>
            <FontAwesomeIcon icon={icon} />
        </Pressable>
    );
}

export default HeaderRightButton;