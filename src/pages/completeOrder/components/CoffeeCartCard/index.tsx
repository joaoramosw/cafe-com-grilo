import { RegularText } from "../../../../components/Typography";
import { ActionsContainer, CoffeeCartCardContainer, RemoveButton } from "./styles";
import { QuantifyInput } from './../../../../components/QuantifyInput';
import { Trash } from "phosphor-react";

export function CoffeeCartCard(){
    return(
        <CoffeeCartCardContainer>
            <div>
                <img src="../../../../../public/coffees/cremoso.png" alt="" />
                <div>
                    <RegularText color="subtitle">Cremoso</RegularText>

                    <ActionsContainer>
                    <QuantifyInput />

                        <RemoveButton>
                            <Trash size={16}/>
                            Remover 
                        </RemoveButton>
                    </ActionsContainer>
                </div>
            </div>
            <p>R$ 9,90</p>
        </CoffeeCartCardContainer>
    )
}