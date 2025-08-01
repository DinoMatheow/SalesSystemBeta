import {  useEffect, useState } from "react";
import { supabase } from "../supabase/supabase.config";
import { data } from "react-router-dom";

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
}