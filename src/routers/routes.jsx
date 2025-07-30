import { Routes, Route} from "react-router-dom";
import {Home} from "../pages/Home";
import { LoginTemplate } from "../components/templates/LoginTemplate";
export function MyRoutes(){

    return (

    <Routes>
        <Route path="/" element={ <Home/> } />
        <Route path="/login" element={ <LoginTemplate/> } />

    </Routes>
    

    )

}