import {MoneyType} from "./App";
import styled from "styled-components";

type CurrentBankomatPropsType = {
    money: MoneyType
}

export const CurrentBankomat = ({money}: CurrentBankomatPropsType ) => {
    return (
            <div>
                <Banknote colors={money.banknote === "USD" ? "aquamarine": "lightskyblue"}>
                 <Name>{money.banknote}</Name>
                 <Nominal>{money.nominal}</Nominal>
                </Banknote>
            </div>
    );
};

type propsType= {
    colors: string
}

const Banknote = styled.div<propsType>`
    background-color: ${props => props.colors};
    margin: 5px;
    width: 200px;
    height: 100px;
`


const Name = styled.span`
  display: flex;
  justify-content: center;
  font-size: 15px;
`

const Nominal = styled.span`
  display: flex;
  justify-content: center;
  margin-top: 15px;
  font-size: 45px;
`
