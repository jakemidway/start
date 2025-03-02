import {SectionTitle} from "../../../components/SectionTitle.tsx";
// import styled from "styled-components";
import {Skill} from "./skill/skill.tsx";
import {FlexWrapper} from "../../../components/FlexWrapper.tsx";


export const Skills = () => {
    return (
        <section>
            <SectionTitle title="Skills"/>
            <FlexWrapper justify="space-around">
                <Skill iconId={"html"} discription="HTML"/>
                <Skill iconId={"css"} discription="CSS3"/>
                <Skill iconId={"js"} discription="JS"/>
                <Skill iconId={"bootstrap"} discription="Bootstrap"/>
                <Skill iconId={"react"} discription="React"/>
                <Skill iconId={"sass"} discription="Sass"/>
                <Skill iconId={"less"} discription="Less" widthIco="75"/>
                <Skill iconId={"git"} discription="Git"/>
            </FlexWrapper>

        </section>
    );
};



