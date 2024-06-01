import React, {createContext, useState} from "react";

export const AuthContext = createContext({});

import api from "../services/api";

import { useNavigation } from "@react-navigation/native";

const AuthProvider = ({children}:any):React.JSX.Element => {

    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(false);

    const navigation = useNavigation();

    async function signUp(nome:string, email:string, password:string){
        setLoading(true);
        try {
            const response = await api.post('/users', {
                name: nome,
                email: email,
                password: password
            });
            setLoading(false);
            navigation.goBack();

        }
        catch(err) {
            console.log('Erro no cadastro', err);
            setLoading(false);
        }
    }

    return(
        <AuthContext.Provider value={{user, signUp, loading}}>
            {children}
        </AuthContext.Provider>
    );
}

export default AuthProvider;