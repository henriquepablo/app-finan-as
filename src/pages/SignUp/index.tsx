import { Platform, Text, View } from "react-native";

import {Background, Container, AreaInput, Input, SubmitButton, SubmitText} from '../SignIn/styled';

const SignUp = ():React.JSX.Element => {

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

                <SubmitButton>
                    <SubmitText>
                        Cadastrar
                    </SubmitText>
                </SubmitButton>
        
            </Container>
        
        </Background>
    );
}

export default SignUp;