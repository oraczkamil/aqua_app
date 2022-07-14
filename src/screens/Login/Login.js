import React, {useState, useEffect} from 'react';
import {Container, Input, Error} from "../../components";
import {useDispatch, useSelector} from "react-redux";
import {SIGN_IN} from "../../store/constants/security";
import {TextInput} from "react-native-paper";
import { Button, Wrapper, Text } from './Login.css';
import {getError} from '../../store/selectors/security';
import navigationService from "../../utils/helpers/NavigationService";

function Login({navigation}) {
    const dispatch = useDispatch();

    const error = useSelector(getError);
    const [login, setLogin] = useState('kamil.oracz@eurocall.pl');
    const [password, setPassword] = useState('password');
    const [passwordVisible, setPasswordVisible] = useState(false);

    const signIn = () => {
        dispatch({type: SIGN_IN, payload: {login, password}});
    }

    useEffect(() => {
        navigationService.navigation = navigation;
    }, [navigation])

    return (
        <Container>
            <Wrapper>
                <Error message={error} />
                <Input type='login' style={{width: '80%'}} label="Email" value={login} onChangeText={text => setLogin(text)} />
                <Input type='login' style={{width: '80%'}} label="Hasło" value={password} onChangeText={text => setPassword(text)} secureTextEntry={passwordVisible ? false : true}
                    right={<TextInput.Icon name={passwordVisible ? "eye" : "eye-off"} onPress={() => setPasswordVisible(!passwordVisible)} />}
                />

                <Button onPress={() => signIn()}><Text>Zaloguj się</Text></Button>
            </Wrapper>
        </Container>
    );
}

export default Login;