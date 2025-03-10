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
        background-color: ${theme.colors.dark};
        margin: 0;
        font-family: "rubik", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
        color: ${theme.colors.font};
        font-size: 16px;
    }
    
    ul{
        list-style: none;
    }
    
    a{
        color: ${theme.colors.accent};
        text-decoration: none;
    }
    button,
    input,
    optgroup,
    select,
    textarea {
        font-family: inherit;
        font-size: 100%;
        line-height: 1.15;
        margin: 0;
    }
    
    button{
        background-color: unset;
        border: none;
    }
    section{
        padding: 32px 0;
    }
    // section:nth-of-type(odd){
    //     background-color: ${theme.colors.light};
    // }
    //
    // section:nth-of-type(even){
    //     background-color: ${theme.colors.dark};
    // }

    .text-accent{
        color: ${theme.colors.accent};
    }
`