import Icon from "react-native-vector-icons/Feather";
import { Container, TipoText, IconView, Tipo, ValorText } from "./styles";

type props = {
    data:any
}

const HistoricList = ({data}: props):React.JSX.Element => {
    return(
        <Container>
            <Tipo>
                <IconView tipo={data.type}>
                    <Icon name={data.type === "despesa" ? "arrow-down" : "arrow-up"} size={20} color="#fff"/>
                    <TipoText>{data.type}</TipoText>
                </IconView>
            </Tipo>
            <ValorText>
                {data.value}
            </ValorText>
        </Container>
    );
}

export default HistoricList;