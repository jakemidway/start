import styled from "styled-components";
import {theme} from "../styles/Theme.styled.tsx";

type TypeSectionTitle = {
    title: string;
}

export const SectionTitle = (props: TypeSectionTitle) => {
    return (
        <StyleTitle>{props.title}</StyleTitle>
    )
}

const StyleTitle = styled.h2`
    color: ${theme.colors.font};
    font-style: normal;
    font-weight: 400;
    line-height: 60px;
    margin-bottom: 32px;
`