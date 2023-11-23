import { OurCoffesContainer } from "./style";
import { TitleText } from './../../../../components/Typography';

export function OurCoffes(){
    return(
        <OurCoffesContainer className="container">
            <TitleText size="l" color="subtitle" as="h2">
                Nossos cafés    
            </TitleText>
        </OurCoffesContainer>
    )
}