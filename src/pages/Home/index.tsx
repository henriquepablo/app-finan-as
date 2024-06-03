import { Button, Text, View } from "react-native";

import { useContext } from "react";
import { AuthContext } from "../../Contexts/auth";

const Home = ():React.JSX.Element => {

    const {signOut, user}:any = useContext(AuthContext);

    return(
        <View>
            <Text>Tela Home</Text>
            <Text>nome {user.nome}</Text>
            <Button title="Sair da conta" onPress={() => signOut()}/>
        </View>
    );
}

export default Home;