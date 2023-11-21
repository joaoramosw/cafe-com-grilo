import {
    HeaderButton,
    HeaderButtonsContainer,
    HeaderContainer,
  } from "./styles";
  import coffeeLogoImg from "../../assets/Logo.svg";
  import { MapPin, ShoppingCart } from "phosphor-react";
  
  export function Header() {
  
    return (
      <HeaderContainer>
        <div className="container">

            <img src={coffeeLogoImg} alt="" />
  
          <HeaderButtonsContainer>
            <HeaderButton variant="purple">
              <MapPin size={20} weight="fill" />
              Salvador, BA
            </HeaderButton>
        
              <HeaderButton variant="yellow">
                <ShoppingCart size={20} weight="fill" />
              </HeaderButton>
           
          </HeaderButtonsContainer>
        </div>
      </HeaderContainer>
    );
  }