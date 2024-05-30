import { Platform, Text, View } from "react-native";

import {Background, Container, Logo, AreaInput, Input, SubmitButton, SubmitText, Link, LinkText} from "./styled";

import { useNavigation } from "@react-navigation/native";
import SignUp from "../SignUp";

const SignIn = ():React.JSX.Element => {

    const navigation = useNavigation();

    return(
        <Background>

            <Container behavior={Platform.OS === 'ios' ? 'padding' : 'padding'}
                enabled
            >
            
                <Logo source={require('../../img/Logo.png')}/>

                <AreaInput>

                    <Input 
                        placeholder="Seu email"
                    />
                </AreaInput>

                <AreaInput>

                    <Input 
                        placeholder="Sua senha"
                    />
                </AreaInput>

                <SubmitButton activeOpacity={0.7}>
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