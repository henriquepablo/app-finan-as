import React, {createContext, useState} from "react";

export const AuthContext = createContext({});

import api from "../services/api";

import { useNavigation } from "@react-navigation/native";

const AuthProvider = ({children}:any):React.JSX.Element => {

    const [user, setUser] = useState({
        nome: 'Lacerda'
    });

    const navigation = useNavigation();

    async function signUp(nome:string, email:string, password:string){
        try {
            const response = await api.post('/users', {
                name: nome,
                email: email,
                password: password
            });

            navigation.goBack();
        }
        catch(err) {
            console.log('Erro no cadastro', err);
        }
    }

    return(
        <AuthContext.Provider value={{user, signUp}}>
            {children}
        </AuthContext.Provider>
    );
}

export default AuthProvider;