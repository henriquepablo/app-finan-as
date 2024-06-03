import { ActivityIndicator, View } from "react-native";
import { useContext } from "react";
import { AuthContext } from "../Contexts/auth";

import AuthRoutes from "./auth.routes";
import AppRoutes from "./app.routes";

const Routes = ():React.JSX.Element => {
    
    const {signed, loadingUser}:any = useContext(AuthContext);
    
    if (loadingUser) {
        return(
            <View style={{flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#f0f4ff'}}>
                <ActivityIndicator size="large" color="#131313"/>
            </View>
        );
    }
    
    return(
        signed ? <AppRoutes/> : <AuthRoutes/>
    );
}

export default Routes;