import {SectionTitle} from "../../../components/SectionTitle.tsx";
// import styled from "styled-components";
import {Skill} from "./skill/skill.tsx";
import {FlexWrapper} from "../../../components/FlexWrapper.tsx";
import {Container} from "../../../components/Container.tsx";


export const Skills = () => {
    return (
        <section>
            <Container>
                <SectionTitle title="Skills"/>
                <FlexWrapper justify="space-between">
                    <Skill iconId={"html"} />
                    <Skill iconId={"css"} />
                    <Skill iconId={"js"} />
                    <Skill iconId={"bootstrap"} />
                    <Skill iconId={"react"} />
                    <Skill iconId={"sass"} />
                    {/*<Skill iconId={"less"} discription="Less" widthIco="75"/>*/}
                    <Skill iconId={"git"} />
                </FlexWrapper>
            </Container>


        </section>
    );
};



