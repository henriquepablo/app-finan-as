import React, { useContext, useState } from "react";

import { Alert, Platform, Text, View } from "react-native";

import {Background, Container, AreaInput, Input, SubmitButton, SubmitText} from '../SignIn/styled';

import { AuthContext } from "../../Contexts/auth";

const SignUp = ():React.JSX.Element => {

    const {signUp}:any = useContext(AuthContext);

    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSignUp = ():void => {
        signUp(nome, email, password);
    }

    return(
        <Background>
        
            <Container behavior={Platform.OS === "ios" ? 'padding' : 'padding'}
                enabled
            >

                <AreaInput>
                    <Input placeholder="Nome" 
                    value={nome}
                    onChangeText={value => setNome(value)}
                    />
                </AreaInput>
                
                <AreaInput>
                    <Input placeholder="Seu Email"
                    value={email}
                    onChangeText={value => setEmail(value)}
                    />
                
                </AreaInput>
                
                <AreaInput>
                    <Input placeholder="Sua senha" 
                    value={password}
                    onChangeText={value => setPassword(value)}
                    secureTextEntry={true}
                    />
                </AreaInput>

                <SubmitButton onPress={handleSignUp}>
                    <SubmitText>
                        Cadastrar
                    </SubmitText>
                </SubmitButton>
        
            </Container>
        
        </Background>
    );
}

export default SignUp;