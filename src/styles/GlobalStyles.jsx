import {createGlobalStyle} from "styled-components"
export const GlobalStyles  = createGlobalStyle`
        body {
        margin:0;
        padding:0;
        box-sizing:border-box;
        background-color: ${(props)=> props.theme.bgtotal}; 
        font-family:"Poppins",sans-serif;
        color:#fff;
    }

`