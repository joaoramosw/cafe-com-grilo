import { ReactNode, createContext, useState } from "react";
import { Coffee } from "../pages/Home/components/CoffeeCard";

export interface CartItem extends Coffee {
    quantify: number;
}

interface CartContextType{
    cartItems: CartItem[];
}

interface CartContextProviderProps{
    children: ReactNode;
} 


export const CartContext = createContext({} as CartContextType)

export function CartContextProvider({children}:CartContextProviderProps){
    const [cartItems, setCartItems] = useState<CartItem[]>([]);

    return(
        <CartContext.Provider value={{cartItems}}>
            {children}	
        </CartContext.Provider>
    );
}