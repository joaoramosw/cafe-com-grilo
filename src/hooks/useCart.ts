import { useContext } from "react";
import { CartItem } from './../contexts/CartContext';
import { HomeContainer } from './../pages/home/styles';
import { Intro } from './../pages/home/components/Intro/index';
import { OurCoffes } from "../pages/home/components/OurCoffes";

export function useCart(){
  const {CartItem} = useCart();
  return(
    <HomeContainer>
      <Intro/>
      <OurCoffes/>
    </HomeContainer>
  )
}