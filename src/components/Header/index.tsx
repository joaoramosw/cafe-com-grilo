import {
    HeaderButton,
    HeaderButtonsContainer,
    HeaderContainer,
  } from "./styles";
  import coffeeLogoImg from "../../assets/Logo.svg";
  import { MapPin, ShoppingCart } from "phosphor-react";
import { NavLink } from "react-router-dom";
  
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
            <NavLink to="completeOrder">
              <HeaderButton variant="yellow">
                <ShoppingCart size={20} weight="fill" />
              </HeaderButton>
            </NavLink>
           
          </HeaderButtonsContainer>
        </div>
      </HeaderContainer>
    );
  }