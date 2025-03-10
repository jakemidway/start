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

const StyleTitle = styled.h3`
    color: ${theme.colors.font};
    font-size: 22px;
    font-style: normal;
    font-weight: 400;
    line-height: 60px;
`