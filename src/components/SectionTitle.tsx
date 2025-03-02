import styled from "styled-components";

type TypeSectionTitle = {
    title: string;
}

export const SectionTitle = (props: TypeSectionTitle) => {
    return (
        <StyleTitle>{props.title}</StyleTitle>
    )
}

const StyleTitle = styled.h3`
    
`