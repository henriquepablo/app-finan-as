import React, {createContext, useEffect, useState} from "react";

export const AuthContext = createContext({});

import api from "../services/api";

import AsyncStorage from "@react-native-async-storage/async-storage";

import { useNavigation } from "@react-navigation/native";
import { AxiosResponse } from "axios";

const AuthProvider = ({children}:any):React.JSX.Element => {

    const [user, setUser] = useState<AxiosResponse | null | void>();
    const [loading, setLoading] = useState(false);
    const [loadingUser, setLoadingUser] = useState(true);
    const [usuarioLogado, setUsuarioLogado] = useState(false);

    const navigation = useNavigation();


    useEffect(() => {
        async function loadStorage() {
            const storageUser = await AsyncStorage.getItem('@token');
            
            if (storageUser) {

                const response = await api.get('/me', {
                    headers: {
                        'Authorization': `Bearer ${storageUser}`
                    }
                })
                .then((response) => {
                    api.defaults.headers['Authorization'] = `Bearer ${storageUser}`;
                    setUser(response.data);
                    setUsuarioLogado(true);
                    setLoadingUser(false);
                })
                .catch(() => {
                    setUser(null);
                    setLoadingUser(false);
                });
            }

            setLoadingUser(false);
        }

        loadStorage();
    }, []);

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

        api.defaults.headers['Authorization'] = `Bearer ${token}`;

        await AsyncStorage.setItem('@token', token);

        setUser({id, name, email});
        
        setUsuarioLogado(true);
        setLoading(false);

        } catch (error) {
            console.log("erro ao logar: ", error);
            setLoading(false);
        }
    }

    async function signOut() {
        await AsyncStorage.clear()
        .then(() => {
            setUser(null);
            setUsuarioLogado(false);
        });
    }

    return(
        <AuthContext.Provider value={{usuarioLogado, user, signUp, signIn, signOut, loading, loadingUser}}>
            {children}
        </AuthContext.Provider>
    );
}

export default AuthProvider;