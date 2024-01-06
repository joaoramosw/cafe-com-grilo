import { createContext } from "react";
import { Coffee } from "../pages/Home/components/CoffeeCard";

export interface CartItem extends Coffee {
    quantify: number;
}

interface CartContextType{
    CartItems: CartItem[];
}

export const CartContext = createContext({} as CartContextType)