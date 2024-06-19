import { createDrawerNavigator } from "@react-navigation/drawer";

import Home from "../pages/Home";
import New from "../pages/New";

const AppDrawer = createDrawerNavigator();

const AppRoutes = ():React.JSX.Element => {
    return(
        <AppDrawer.Navigator
            screenOptions={{
                headerShown: false,
                
                drawerStyle: {
                    backgroundColor: '#fff',
                    paddingTop: 20,
                },

                drawerActiveBackgroundColor: '#3b3bdf',
                drawerActiveTintColor: '#fff',

                drawerInactiveBackgroundColor: '#f0f2ff',
                drawerInactiveTintColor: '#121212'
            }}
        >
            <AppDrawer.Screen 
                name="Home"
                component={Home}
            />
            
            <AppDrawer.Screen 
                name="New"
                component={New}
            />
        </AppDrawer.Navigator>
    );
} 

export default AppRoutes;