import { useContext } from "react";


export function useCart(){
  const context  = useContext(cartContext);
  return context;
}