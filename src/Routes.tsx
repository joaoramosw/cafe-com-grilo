import { Routes } from "react-router-dom";

export function Router(){
    return(
        <Routes>
            <Route path="/" element={<HomePage />} />
        </Routes>
    )
}