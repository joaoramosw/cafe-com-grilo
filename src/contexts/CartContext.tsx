import { createContext, useState } from "react";
import { Coffee } from "../pages/Home/components/CoffeeCard";

export interface CartItem extends Coffee {
    quantify: number;
}

interface CartContextType{
    CartItems: CartItem[];
}

export const CartContext = createContext({} as CartContextType)

export function CartContextProvider(){
    const [CartItems, setCartItems] = useState<CartItem[]>([])
    return(
        <CartContext.Provider value={{CartItems}}>

        </CartContext.Provider>
    )
}