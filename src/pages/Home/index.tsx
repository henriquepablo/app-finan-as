import { Button, Text, View } from "react-native";

import { useContext } from "react";
import { AuthContext } from "../../Contexts/auth";
import { Background } from "./styles";
import Header from "../../Components/Header";

const Home = ():React.JSX.Element => {

    return(
        <Background>
            <Header title="Minhas movimentações"/>
        </Background>
    );
}

export default Home;