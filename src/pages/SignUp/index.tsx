import React, { useContext } from "react";

import { Alert, Platform, Text, View } from "react-native";

import {Background, Container, AreaInput, Input, SubmitButton, SubmitText} from '../SignIn/styled';

import { AuthContext } from "../../Contexts/auth";

const SignUp = ():React.JSX.Element => {

    const {user}:any = useContext(AuthContext);

    const handleSignUp = ():void => {
        console.log(user.nome);
    }

    return(
        <Background>
        
            <Container behavior={Platform.OS === "ios" ? 'padding' : 'padding'}
                enabled
            >

                <AreaInput>
                    <Input placeholder="Nome"/>
                </AreaInput>
                
                <AreaInput>
                    <Input placeholder="Seu Email"/>
                
                </AreaInput>
                
                <AreaInput>
                    <Input placeholder="Sua senha"/>
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