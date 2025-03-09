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
                        <li>
                            <h3>Making a design system from scratch</h3>
                            <time>12 Feb 2020</time>

                        </li>
                        <li></li>
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
`

const PostList = styled.ul`
    background-color: ${theme.colors.bglight};
`