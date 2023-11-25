import { Minus, Plus } from "phosphor-react";
import { IconWrapper, QuantifyInputContainer } from "./styles";

export function QuantifyInput(){
    return(
        <QuantifyInputContainer>
            <IconWrapper>
                <Minus weight="fill" size={14}/>
            </IconWrapper>
            <input type="number" readOnly value={1}/>
            <IconWrapper>
                <Plus weight="fill" size={14}/>
            </IconWrapper>
        </QuantifyInputContainer>
    )
}