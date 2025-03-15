import styled from "styled-components";
import {theme} from "../../../../styles/Theme.styled.tsx";
import {FlexWrapper} from "../../../../components/FlexWrapper.tsx";
import img from "./../img/proobrezkicrop.jpg"


type TypeWorkItemProps = {
    titleWork: string;
    age: number;
    stack: string;
    descriptionWork: string;
}


export const WorkItem = (props:TypeWorkItemProps) => {
    return (
        <WorkItemStyled>
            <FlexWrapper gap={"18px"}>
                <ImgStyled src={img} alt="my work"/>

                <div>
                    <ItemTitle>{props.titleWork}</ItemTitle>
                    <Stack><span>{props.age}</span>{props.stack}</Stack>
                    <WorkDescription>{props.descriptionWork}</WorkDescription>
                </div>
            </FlexWrapper>
        </WorkItemStyled>
    );
};

const WorkItemStyled = styled.div`
    padding-bottom: 15px;
    border-bottom: 1px ${theme.colors.accent} solid;
    margin-bottom: 28px;
`
const ImgStyled = styled.img`
    width: 246px;
    height: 100%;
`

const ItemTitle = styled.h3`
    font-size: 30px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    margin-bottom: 16px;
`
const Stack = styled.div`
    color: ${theme.colors.accent};
    font-size: 20px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    & span{
        display: inline-block;
        color: ${theme.colors.dark};
        margin-right: 36px;
        background-color: ${theme.colors.accent};
        padding: 6px 12px 3px 12px;
        border-radius: 16px;
        margin-bottom: 14px;
    }
`
const WorkDescription = styled.p`
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 24px;
    
`