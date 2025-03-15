import {SectionTitle} from "../../../components/SectionTitle.tsx";
import {Container} from "../../../components/Container.tsx";
import styled from "styled-components";
import {WorkItem} from "./workItem/WorkItem.tsx";



export const Work = () => {
    return (
        <section>
            <Container>
                <SectionTitle title={"Featured works"}/>
                <WorkList>
                    <WorkItem titleWork={"Site for a carpentry workshop"} age={2020} stack={"SCSS"} descriptionWork={"Following the completion of my course, I had the opportunity to apply my skills in a practical setting. This experience may lead to my first commercial project, marking an important step in my professional journey. I’m eager to contribute and deliver results that reflect my dedication and training."}/>
                    <WorkItem titleWork={"Training layout"} age={2020} stack={"Less"} descriptionWork={"In my first project for the course, I successfully applied the skills I acquired. I revisited layout design principles to ensure a solid foundation and dedicated time to studying Less, deepening my understanding of its functionality. This experience provided valuable insights and enhanced my ability to create well-structured, responsive designs."}/>
                    <WorkItem titleWork={"Training layout"} age={2020} stack={"Bootstrap"} descriptionWork={"The second project represents a transition from unfamiliarity to proficiency with Bootstrap. With more hands-on experience, I might develop a deeper appreciation for its capabilities. Gradually exploring and implementing Bootstrap enhances my understanding of its features and improves the efficiency of interface development."}/>
                </WorkList>

            </Container>
        </section>
    );
};

const WorkList = styled.section`
    
`


