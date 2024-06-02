import { View } from "react-native";
import { useContext } from "react";
import { AuthContext } from "../Contexts/auth";

import AuthRoutes from "./auth.routes";
import AppRoutes from "./app.routes";

const Routes = ():React.JSX.Element => {
    
    const {signed}:any = useContext(AuthContext);
    
    const loading: boolean = false;
    
    return(
        signed ? <AppRoutes/> : <AuthRoutes/>
    );
}

export default Routes;