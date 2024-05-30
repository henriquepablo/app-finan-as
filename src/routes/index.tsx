import { View } from "react-native";

import AuthRoutes from "./auth.routes";

const Routes = ():React.JSX.Element => {
    
    const loading: boolean = false;
    const signed: boolean = false;
    
    return(
        signed ? <View></View> : <AuthRoutes/>
    );
}

export default Routes;