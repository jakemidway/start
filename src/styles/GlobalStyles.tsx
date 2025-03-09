import {createGlobalStyle} from "styled-components";
import {theme} from "./Theme.styled.tsx";

export const GlobalStyle = createGlobalStyle`
    *,
    *::before,
    *::after {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        //background-color: ${theme.colors.grey.dark};
        margin: 0;
        font-family: "heebo", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
        color: ${theme.colors.font};
    }
    
    ul{
        list-style: none;
    }
    
    a{
        color: ${theme.colors.primary};
        text-decoration: none;
    }
    
    button{
        background-color: unset;
        border: none;
    }
    
    section:nth-of-type(odd){
        background-color: ${theme.colors.bglight};
    }

    section:nth-of-type(even){
        background-color: ${theme.colors.bgdark};
    }
`