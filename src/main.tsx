import {StrictMode} from 'react'
import {createRoot} from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import {GlobalStyle} from "./styles/GlobalStyles.tsx";
import {ThemeProvider} from "styled-components";
import {theme} from "./styles/Theme.styled.tsx";

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <ThemeProvider theme={theme}>
            <App/>
            <GlobalStyle />
        </ThemeProvider>
    </StrictMode>,
)
