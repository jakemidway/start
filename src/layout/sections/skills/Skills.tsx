import {SectionTitle} from "../../../components/SectionTitle.tsx";
import {Skill} from "./skill/skill.tsx";
import {FlexWrapper} from "../../../components/FlexWrapper.tsx";
import {Container} from "../../../components/Container.tsx";

import styled from "styled-components";


export const Skills = () => {
    return (
        <SkillsStyled>
            <Container>
                <SectionTitle title="Skills"/>
                <FlexWrapper justify="space-between">
                    <Skill iconId={"html"} />
                    <Skill iconId={"css"} />
                    <Skill iconId={"js"} />
                    <Skill iconId={"bootstrap"} />
                    <Skill iconId={"react"} />
                    <Skill iconId={"sass"} />
                    <Skill iconId={"git"} />
                </FlexWrapper>
            </Container>


        </SkillsStyled>
    );
};

const SkillsStyled = styled.section`
    background: transparent;
`


