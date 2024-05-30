import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "react-native";

import Routes from "./routes";

const App = (): React.JSX.Element => {

    return (
      <NavigationContainer>

        <StatusBar backgroundColor="#f0f4ff" barStyle="dark-content"/>
        
        <Routes />

      </NavigationContainer>
    );
}

export default App;