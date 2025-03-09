import {theme} from "../../styles/Theme.styled.tsx";
import styled from "styled-components";
import {Container} from "../../components/Container.tsx";

export const Posts = () => {
    return (
        <StyledPosts>
            <Container>
                <PostsContns>
                    <PostTitle>
                        <h2>Recent posts</h2>
                        <a href="#">View all</a>
                    </PostTitle>

                    <PostList>
                        <PostItem>
                            <h3>Making a design system from scratch</h3>
                            <div>
                                <time>12 Feb 2020</time>
                                <span>Design, Pattern</span>
                            </div>
                            <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia
                                consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
                        </PostItem>
                        <PostItem>
                            <h3>Creating pixel perfect icons in Figma</h3>
                            <div>
                                <time>12 Feb 2020</time>
                                <span>Figma, Icon Design</span>
                            </div>
                            <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia
                                consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
                        </PostItem>
                    </PostList>
                </PostsContns>
            </Container>

        </StyledPosts>
    );
};

const StyledPosts = styled.div`
    background-color: ${theme.colors.bgdark};
`

const PostsContns = styled.div`
    padding: 32px 0;
`

const PostTitle = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: baseline;
    margin-bottom: 22px;
`

const PostList = styled.ul`
    display: flex;
    gap: 20px;
`

const PostItem = styled.div`
    min-width: 384px;
    background-color: ${theme.colors.bglight};
    padding: 24px;

    & h3 {
        margin-bottom: 22px;
    }

    & div {
        display: flex;
        margin-bottom: 12px;
        & > * {
            display: block;
            width: 50%;
        }
        & span{
            padding-left: 24px;
            border-left: 1px solid black;
        }
    }
    
`