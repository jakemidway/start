import {theme} from "../../../styles/Theme.styled.tsx";
import styled from "styled-components";
import {Container} from "../../../components/Container.tsx";
import {Post} from "./Post.tsx";
import {SectionTitle} from "../../../components/SectionTitle.tsx";

export const Posts = () => {
    return (
        <StyledPosts>
            <Container>

                    <PostTitle>
                        <SectionTitle title="Recent posts"/>

                        <a href="#">View all</a>
                    </PostTitle>

                    <PostList>
                        <Post title={"Making a design system from scratch"} time={"12 Feb 2020"}
                              tags={"Design, Pattern"}
                              textPost={"Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet."}/>
                        <Post title={"Creating pixel perfect icons in Figma"} time={"12 Feb 2020"}
                              tags={"Figma, Icon Design"}
                              textPost={"Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet."}/>

                    </PostList>

            </Container>

        </StyledPosts>
    );
};

const StyledPosts = styled.div`
    background-color: ${theme.colors.dark};
`



const PostTitle = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: baseline;
`

const PostList = styled.ul`
    display: flex;
    gap: 20px;
    @media (max-width: 800px) {
        flex-direction: column;
    }
`


