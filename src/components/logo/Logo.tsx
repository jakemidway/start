import styled from "styled-components";
import {theme} from "../../styles/Theme.styled.tsx";

export const Logo = () => {
    return (

        <LinkLogo href='#'>
            <h2>&#60;head<GoldWord>e</GoldWord>r&#62;</h2>
        </LinkLogo>
    );
};

const LinkLogo = styled.a`
    color: ${theme.colors.font};
`

const GoldWord = styled.span`
    color: ${theme.colors.primary};
`
