import {theme} from "../../styles/Theme.styled.tsx";
import styled from "styled-components";

type TypePropsPost = {
    title: string;
    time: string;
    tags: string;
    textPost: string;
}

export const Post = (props: TypePropsPost) => {
    return (
            <PostItem>
                <h3>{props.title}</h3>
                <div>
                    <time>{props.time}</time>
                    <span>{props.tags}</span>
                </div>
                <p>{props.textPost}</p>
            </PostItem>
    );
};

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