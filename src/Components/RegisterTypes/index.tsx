import { useState } from "react";
import { RegisterContainer, RegisterTypeButton, RegisterLabel } from "./styles";
import Feather from "react-native-vector-icons/Feather";

type props = {
    type:string,
    sendTypeChanged: Function,
}

const RegisterTypes = ({type, sendTypeChanged}: props):React.JSX.Element => {

    const [typeChecked, setTypeChecked] = useState(type);

    function changeType(name:string) {
        if (name === 'receita') {
            setTypeChecked('receita');
            sendTypeChanged('receita');
        } else {
            setTypeChecked('despesa');
            sendTypeChanged('despesa');
        }
    }

    return(
        <RegisterContainer>
            <RegisterTypeButton checked={typeChecked === 'receita' ? true : false} onPress={() => changeType('receita')}>
                <Feather name="arrow-up" size={25} color="#12121"/>
                <RegisterLabel>
                    Receita    
                </RegisterLabel>    
            </RegisterTypeButton>

            <RegisterTypeButton checked={typeChecked === 'despesa' ? true : false} onPress={() => changeType('despesa')}>
                <Feather name="arrow-down" size={25} color="#12121"/>
                <RegisterLabel>
                    Despesa    
                </RegisterLabel>    
            </RegisterTypeButton>
        </RegisterContainer>
    );
}

export default RegisterTypes;