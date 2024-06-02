import { Alert, Platform, Text, View } from "react-native";

import {Background, Container, Logo, AreaInput, Input, SubmitButton, SubmitText, Link, LinkText} from "./styled";

import { useNavigation } from "@react-navigation/native";
import SignUp from "../SignUp";
import { useState, useContext } from "react";

import { AuthContext } from "../../Contexts/auth";

const SignIn = ():React.JSX.Element => {

    const navigation = useNavigation();

    const {signIn, loading}:any = useContext(AuthContext);

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = ():void => {
        signIn(email, password);
    }

    return(
        <Background>

            <Container behavior={Platform.OS === 'ios' ? 'padding' : 'padding'}
                enabled
            >
            
                <Logo source={require('../../img/Logo.png')}/>

                <AreaInput>

                    <Input 
                        placeholder="Seu email"
                        value={email}
                        onChangeText={value => setEmail(value)}
                    />
                </AreaInput>

                <AreaInput>

                    <Input 
                        placeholder="Sua senha"
                        value={password}
                        onChangeText={value => setPassword(value)}
                        secureTextEntry={true}
                    />
                </AreaInput>

                <SubmitButton activeOpacity={0.7} onPress={handleLogin}>
                    <SubmitText>
                        Acessar
                    </SubmitText>
                </SubmitButton>
            

                <Link onPress={() => navigation.navigate('SignUp' as never)}>
                    <LinkText>
                        Criar uma conta
                    </LinkText>
                </Link>
            
            </Container>

        </Background>
    );
}

export default SignIn;