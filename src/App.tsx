
import { Alert } from "react-native";
import { Container, Nome, Titulo, BotaoSujeito, BotaoText } from "./style";

const App = (): React.JSX.Element => {

    return (
      <Container>
        
        <Titulo>Sujeito Programador</Titulo>
        
        <Nome>Olá Lacerda</Nome>
        
        <BotaoSujeito onPress={() => Alert.alert('clicou')}>
          <BotaoText>Entrar</BotaoText>
        </BotaoSujeito>
      
      </Container>
    );
}

export default App;