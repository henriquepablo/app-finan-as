import { createDrawerNavigator } from "@react-navigation/drawer";

import Home from "../pages/Home";

const AppDrawer = createDrawerNavigator();

const AppRoutes = ():React.JSX.Element => {
    return(
        <AppDrawer.Navigator>
            <AppDrawer.Screen 
                name="Home"
                component={Home}
            />
        </AppDrawer.Navigator>
    );
} 

export default AppRoutes;