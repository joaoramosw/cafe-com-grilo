import { Minus, Plus } from "phosphor-react";
import { IconWrapper, QuantifyInputContainer } from "./styles";

interface QuantifyInputProps{
    size?: "medium" | "small";
}

export function QuantifyInput({size="medium"}:QuantifyInputProps){
    return(
        <QuantifyInputContainer size={size}>
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