import { ReactNode, createContext, useState } from "react";
import { Coffee } from "../pages/Home/components/CoffeeCard";
import { CartContextProvider } from './CartContext';

export interface CartItem extends Coffee {
    quantify: number;
}

interface CartContextType{
    CartItems: CartItem[];
}

interface CartContextProviderProps{
}

export const CartContext = createContext({} as CartContextType)

export function CartContextProvider({children}:CartContextProviderProps){
    const [CartItems, setCartItems] = useState<CartItem[]>([])
    return(
        <CartContext.Provider value={{CartItems}}>

        </CartContext.Provider>
    )
}