import { Input } from "../../../../components/Input";
import { AddressFormContainer } from "./styles";

export function AddressForm(){
    return(
        <AddressFormContainer>
            <Input placeholder="CEP" type="number" className="cep"/>
            <Input placeholder="RUA" className="street"/>
            <Input placeholder="NÚMERO" className="number" type="number"/>
            <Input placeholder="COMPLEMENTO" className="complement"/>
            <Input placeholder="CIDADE" />
            <Input placeholder="BAIRRO" />
            <Input placeholder="UF" />  

        </AddressFormContainer>
    )
}