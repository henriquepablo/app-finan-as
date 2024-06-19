import React, { useMemo } from "react";
import { Balance, Container, Label } from "./styles";

type props = {
    data: any
}

const BalanceItem = ({data}: props):React.JSX.Element => {
    
    const labelName = useMemo(() => {
        if (data.tag === 'saldo') {
            return{
                label: 'Saldo Atual',
                color: '3b3dbf'
            }
        } else if (data.tag === 'receita') {
            return{
                label: 'Entradas de hoje',
                color: '00b94a'
            }
        }else {
            return{
                label: 'Saídas de hoje',
                color: 'Ef463a'
            }
        }
    }, [data]);

    return(
        <Container bg={labelName.color}>
            <Label>
                {labelName.label}
            </Label>
            <Balance>R$ {data.saldo}</Balance>
        </Container>
    );
}

export default BalanceItem;