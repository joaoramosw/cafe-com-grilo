import {Outlet} from "react-router-dom";
import {LayoutContainer as LayoutContainer } from "./styles";
import { Header } from './../../components/Header';


export function DefaultLayout(){
    return(
        <LayoutContainer>
            <Header/>
            <Outlet/>
        </LayoutContainer>
    )
}