import 'react-native-gesture-handler';
import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "react-native";

import Routes from "./routes";
import AuthProvider from "./Contexts/auth";

const App = (): React.JSX.Element => {

    return (
      <NavigationContainer>

        <AuthProvider>

          <StatusBar backgroundColor="#f0f4ff" barStyle="dark-content"/>
        
          <Routes />
        
        </AuthProvider>
        
      </NavigationContainer>
    );
}

export default App;