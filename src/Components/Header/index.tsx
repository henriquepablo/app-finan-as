import React from "react";
import { Container, Title, ButtonMenu } from "./styles";
import Icon from "react-native-vector-icons/Feather";

import { useNavigation } from "@react-navigation/native";

type props = {
    title:string
}

const Header = (props: props):React.JSX.Element => {

    const navigation = useNavigation();

    return(
        <Container>

            <ButtonMenu onPress={():void => navigation.openDrawer()}>
                <Icon name="menu" size={35} color="#121212" />
            </ButtonMenu>
            
            { props.title && (  
                <Title>
                    {props.title}
                </Title>
            )}
        </Container>
    );
} 

export default Header;