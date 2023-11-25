import { Route, Routes } from "react-router-dom";
import { HomePage } from "./pages/home";
import { DefaultLayout } from "./layouts/DefaultLayout";
import {CompleteOrderPage} from "./pages/completeOrder";

export function Router(){
    return(
        <Routes>
            <Route path="/" element={<DefaultLayout/>}>
                <Route path="/" element={<HomePage />}/>
                <Route path="/completeOrder" element={<CompleteOrderPage />} />
            </Route>
        </Routes>
    )
}