import { Keyboard, SafeAreaView, TouchableWithoutFeedback, Alert } from "react-native";
import Header from "../../Components/Header";
import { Background, Input, SubmitButton, SubmitText } from "./styles";
import { useState } from "react";
import RegisterTypes from "../../Components/RegisterTypes";
import api from "../../services/api";
import { format } from "date-fns";
import { useNavigation } from "@react-navigation/native";

const New = ():React.JSX.Element => {

    const navigation = useNavigation();

    const [labelInput, setLabelInput] = useState('');
    const [valueInput, setValueInput] = useState('');
    const [type, setType] = useState('receita');

    const handleSumbit = ():void => {
        Keyboard.dismiss();
        
        if (isNaN(parseFloat(valueInput)) || type === null) {
          Alert.alert('Preencha todos os campos'); 
          return;
        }

        Alert.alert(
            'Confirmando dados',
            `Tipo ${type} - valor: ${parseFloat(valueInput)}`,
            [
                {
                    text: 'Cancelar',
                    style: 'cancel'
                },
                {
                    text: 'Continuar',
                    onPress: () => handleAdd()
                }
            ]
        );
    }

    async function handleAdd() {
        Keyboard.dismiss();
        
        await api.post('/receive', {
            description: labelInput,
            value: Number(valueInput),
            type: type,
            date: format(new Date(), 'dd/MM/yyyy')
        });

        setLabelInput('');
        setValueInput('');
        navigation.navigate('Home' as never);
    }

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

                    <SubmitButton onPress={handleSumbit}>
                        <SubmitText>Registrar</SubmitText>
                    </SubmitButton>
                </SafeAreaView>

            </Background>
        </TouchableWithoutFeedback>
    );
}

export default New;
