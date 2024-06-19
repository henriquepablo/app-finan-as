import { Keyboard, SafeAreaView, TouchableWithoutFeedback } from "react-native";
import Header from "../../Components/Header";
import { Background, Input, SubmitButton, SubmitText } from "./styles";
import { useState } from "react";
import RegisterTypes from "../../Components/RegisterTypes";

const New = ():React.JSX.Element => {

    const [labelInput, setLabelInput] = useState('');
    const [valueInput, setValueInput] = useState('');
    const [type, setType] = useState('receita');

    return(
        <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
            <Background>
                <Header title="Registrando"/>

                <SafeAreaView style={{alignItems: 'center', marginTop: 14}}>
                    <Input 
                        placeholder="Descrição desse registro"
                        value={labelInput}
                        onChangeText={(text => setLabelInput(text))}
                    />
                    
                    <Input 
                        placeholder="Valor desejado"
                        keyboardType="numeric"
                        value={valueInput}
                        onChangeText={(text => setValueInput(text))}
                    />
                    
                    <RegisterTypes type={type} sendTypeChanged={(item:string) => setType(item)}/>

                    <SubmitButton>
                        <SubmitText>Registrar</SubmitText>
                    </SubmitButton>
                </SafeAreaView>

            </Background>
        </TouchableWithoutFeedback>
    );
}

export default New;
