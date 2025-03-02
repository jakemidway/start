import styled from "styled-components";
import photo from "./../../../assets/img/i22.jpg"
import {FlexWrapper} from "../../../components/FlexWrapper.tsx";

export const Main = () => {
    return (
        <div>
            <FlexWrapper justify="space-around">
                <div>
                    <span>I'm Medvetskiy Evgeny</span>
                    <h1>Web-developer, The Creator</h1>
                </div>
                <Photo src={photo}/>
            </FlexWrapper>
        </div>
    );
};

const Photo = styled.img`
    width: 350px;
    height: 350px;
`