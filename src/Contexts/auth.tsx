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

    async function signIn(email:string, password:string) {
        setLoading(true);

        try {
            const response = await api.post('/login', {
                email: email,
                password: password
            });

        const {id, name, token} = response.data;

        const data = {
            id,
            name,
            token,
            email
        };

        api.defaults.headers['Authorization'] = `Barer ${token}`;

        setUser({id, name, email});

        setLoading(false);

        } catch (error) {
            console.log("erro ao logar: ", Error);
            setLoading(false);
        }
    }

    return(
        <AuthContext.Provider value={{signed: !!user, user, signUp, signIn, loading}}>
            {children}
        </AuthContext.Provider>
    );
}

export default AuthProvider;