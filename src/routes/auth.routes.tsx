import { createNativeStackNavigator } from "@react-navigation/native-stack";

import SignIn from "../pages/SignIn";
import SignUp from "../pages/SignUp";

const AuthStack = createNativeStackNavigator();


const AuthRoutes = ():React.JSX.Element => {
    return(
        <AuthStack.Navigator>
            
            <AuthStack.Screen 
                name="SignIn"
                component={SignIn}
                options={
                    {headerShown: false}
                }
            /> 

            <AuthStack.Screen 
                name="SignUp"
                component={SignUp}
                options={{
                    headerStyle: {
                        backgroundColor: '#3b3dbf', 
                    },
                    headerTintColor: '#fff',
                    headerTitle: 'Voltar',
                    headerBackTitleVisible: false
                }}
            /> 
            
        </AuthStack.Navigator>
    );
}

export default AuthRoutes;