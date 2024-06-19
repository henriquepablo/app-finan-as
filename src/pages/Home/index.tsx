import { useContext, useEffect, useState } from "react";

import { Background, ListBalance } from "./styles";
import Header from "../../Components/Header";
import { format } from "date-fns";
import api from "../../services/api";
import { AxiosResponse } from "axios";
import { useIsFocused } from "@react-navigation/native";
import BalanceItem from "../../Components/BalanceItem";

const Home = ():React.JSX.Element => {

    const [listBalance, setListBalance] = useState([]);

    const [dateMovents, setDateMovements] = useState(new Date());

    const isFocused:boolean = useIsFocused(); 

    useEffect(() => {
        let isActive:boolean = true;

        async function getMovements() {
            let dateFormated:string = format(dateMovents, "dd/MM/yyyy");

            const balance:AxiosResponse<any, any> = await api.get('/balance', {
                params: {
                    date: dateFormated
                }
            });

            if(isActive) {
                setListBalance(balance.data);
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

        </Background>
    );
}

export default Home;