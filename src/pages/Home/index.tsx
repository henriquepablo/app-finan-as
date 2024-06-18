import { useContext, useEffect, useState } from "react";

import { Background } from "./styles";
import Header from "../../Components/Header";
import { format } from "date-fns";
import api from "../../services/api";
import { AxiosResponse } from "axios";

const Home = ():React.JSX.Element => {

    const [listBalance, setListBalance] = useState([]);

    const [dateMovents, setDateMovements] = useState(new Date());

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
    }, []);

    return(
        <Background>
            <Header title="Minhas movimentações"/>
        </Background>
    );
}

export default Home;