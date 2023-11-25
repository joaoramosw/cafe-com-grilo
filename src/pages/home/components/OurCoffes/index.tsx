import { CoffeeList, OurCoffeesContainer } from "./style";
import { TitleText } from './../../../../components/Typography';
import { CoffeeCard } from "../CoffeeCard";
import { coffees } from "../../../../data/coffees";

export function OurCoffes(){
    return(
        <OurCoffeesContainer className="container">
            <TitleText size="l" color="subtitle" as="h2">
                Nossos cafés    
            </TitleText>
            <CoffeeList>
                {coffees.map((coffee) =>(
                    <CoffeeCard key={coffee.id} coffee={coffee}/>
                ))}
            </CoffeeList>
        </OurCoffeesContainer>
    )
}