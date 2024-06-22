import { useContext, useEffect, useState } from "react";

import { Background, ListBalance, Area, Title, List } from "./styles";
import Header from "../../Components/Header";
import { format } from "date-fns";
import api from "../../services/api";
import { AxiosResponse } from "axios";
import { useIsFocused } from "@react-navigation/native";
import BalanceItem from "../../Components/BalanceItem";
import { TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";
import HistoricList from "../../Components/HistoricList";

const Home = ():React.JSX.Element => {

    const [listBalance, setListBalance] = useState([]);

    const [dateMovents, setDateMovements] = useState(new Date());

    const [movements, setMovements] = useState([]);

    const isFocused:boolean = useIsFocused(); 

    useEffect(() => {
        let isActive:boolean = true;

        async function getMovements() {
            let dateFormated:string = format(dateMovents, "dd/MM/yyyy");

            const receives = await api.get('/receives', {
                params: {
                    date: dateFormated
                }
            });

            const balance:AxiosResponse<any, any> = await api.get('/balance', {
                params: {
                    date: dateFormated
                }
            });

            if(isActive) {
                setListBalance(balance.data);
                setMovements(receives.data);
            }
        }

        getMovements();

        return (() => {
            isActive = false;
        }); 
    }, [isFocused]);

    return(
        <Background>
            <Header title="Minhas movimentações"/>

            <ListBalance 
                data={listBalance}
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                keyExtractor={(item)=> item.tag}
                renderItem={({item}) => <BalanceItem data={item}/>}
            />

            <Area>
                <TouchableOpacity>
                    <Icon name="event" color="#121212" size={30}/>
                </TouchableOpacity>
            
                <Title>Ultimas movimentações</Title>
            </Area>

            <List 
                data={movements}
                keyExtractor={item => item.id}
                renderItem={({item}) => <HistoricList data={item}/>}
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{paddingBottom: 20}}
            />
        </Background>
    );
}

export default Home;