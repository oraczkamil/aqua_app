import React, {useState} from 'react';
import {Button, View} from "react-native";
import {Container, Input} from "../../components";
import {useDispatch} from "react-redux";
import {SIGN_IN} from "../../store/constants/security";
import {TextInput} from "react-native-paper";

function Login() {
    const dispatch = useDispatch();

    const [login, setLogin] = useState('kamil.oracz@eurocall.pl');
    const [password, setPassword] = useState('password');
    const [passwordVisible, setPasswordVisible] = useState(false);

    const signIn = () => {
        dispatch({type: SIGN_IN, payload: {login, password}});
    }

    return (
        <Container>
            <Input style={{width: '80%'}} label="Email" value={login} onChangeText={text => setLogin(text)} />
            <Input style={{width: '80%'}} label="Hasło" value={password} onChangeText={text => setPassword(text)} secureTextEntry={passwordVisible ? false : true}
                   right={<TextInput.Icon name={passwordVisible ? "eye" : "eye-off"} onPress={() => setPasswordVisible(!passwordVisible)} />}
            />

            <View style={{marginTop: 20}}>
                <Button onPress={() => signIn()} title={'Zaloguj się'} />
            </View>
        </Container>
    );
}

export default Login;