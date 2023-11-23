import { CoffeeList, OurCoffeesContainer } from "./style";
import { TitleText } from './../../../../components/Typography';
import { CoffeeCard } from "../CoffeeCard";

export function OurCoffes(){
    return(
        <OurCoffeesContainer className="container">
            <TitleText size="l" color="subtitle" as="h2">
                Nossos cafés    
            </TitleText>
            <CoffeeList>
                <CoffeeCard/>
                <CoffeeCard/>
                <CoffeeCard/>
                <CoffeeCard/>
                <CoffeeCard/>
                <CoffeeCard/>
            </CoffeeList>
        </OurCoffeesContainer>
    )
}