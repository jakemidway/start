import styled from "styled-components";
import {theme} from "../../styles/Theme.styled.tsx";

type TypePropsButton = {
    text: string;
}

export const Button = (props: TypePropsButton) => {
    return (
        <StyledButton>
            {props.text}
        </StyledButton>
    );
};

const StyledButton = styled.button`
    border: 1px solid ${theme.colors.accent};
    color: ${theme.colors.accent};
    background: inherit;
    padding: 0.8rem 1.4rem 0.6rem;
    border-radius: 2px;
    @include transition-time(1);

    &:hover {
        background-color: ${theme.colors.accent};
        color: ${theme.colors.dark};
    }

    &:active {
        border: 1px solid ${theme.colors.accent};
        color: ${theme.colors.accent};
        background: inherit;
    }
`