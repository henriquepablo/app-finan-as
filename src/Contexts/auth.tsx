import React, {createContext, useState} from "react";

export const AuthContext = createContext({});

const AuthProvider = ({children}:any):React.JSX.Element => {

    const [user, setUser] = useState({
        nome: 'Lacerda'
    });

    return(
        <AuthContext.Provider value={{user}}>
            {children}
        </AuthContext.Provider>
    );
}

export default AuthProvider;