import {  useEffect, useState } from "react";
import { supabase } from "../supabase/supabase.config";
import { data } from "react-router-dom";


    const AuthContext = createContext();
export const AuthContextProvider = ({ Children })=>{
    const [user, setUser] = useState([])
    useEffect(()=> {
        const { data } = supabase.auth.
        onAuthStateChange(async(event, session)=>{
            console.log(event);
        });
        return ()=>{
            data.subscription;
        }
    }, []);

    return ( 
        <AuthContext.Provider value={{user}} >

            {
                Children
            }
        </AuthContext.Provider>
    )

}

export const UserAuth =()=>{
    return useContext(AuthContext)
}