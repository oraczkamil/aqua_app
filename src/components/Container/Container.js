import React from 'react';
import {ActivityIndicator} from "react-native";
import {Wrapper} from "./Container.css";
import {useSelector} from "react-redux";
import {isLoading} from "../../store/selectors/ui";

function Container({children}) {
    let loading = useSelector(isLoading);

    return (
        <Wrapper>
            { loading ? <ActivityIndicator size="large" /> : children }
        </Wrapper>
    );
}

export default Container;