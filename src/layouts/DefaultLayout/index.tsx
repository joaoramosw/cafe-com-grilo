import {Outlet} from "react-router-dom";
import {LayoutContanier } from "./styles";


export function DefaultLayout(){
    return(
        <LayoutContanier>
            <Outlet/>
        </LayoutContanier>
    )
}