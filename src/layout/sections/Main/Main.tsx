import styled from "styled-components";
import photo from "./../../../assets/img/i22.jpg"
import {FlexWrapper} from "../../../components/FlexWrapper.tsx";
import {Container} from "../../../components/Container.tsx";
import {Button} from "../../../components/button/Button.tsx";

export const Main = () => {
    return (
        <Container>
            <StyledMain>
                <FlexWrapper justify="space-between">
                    <About>
                        <MainText>I'm <b>Medvetskiy Evgeny</b></MainText>
                        <MainTitle>Web-developer, The Creator</MainTitle>
                        <Button text={"Download Resume"}/>
                    </About>
                    <Photo>
                        <svg width="720" height="720" viewBox="0 0 720 720" xmlns="http://www.w3.org/2000/svg">
                            <defs>
                                <clipPath id="clipShape">
                                    <path
                                        d="M149.55,15.87c-35.53,63.34,13.12,106.04-31.95,226.63-32.78,87.69-76.87,114.26-70.41,176.33,5.3,50.91,40.31,84.37,85.8,126.63,64.59,60,183,169.99,345.56,152.66,43.63-4.65,133.15-14.19,185.8-81.07,66.35-84.28,1.48-167.37,14.2-437.87,5.8-123.35,21-142.45-1.18-179.18-82.89-137.26-448.8-124.99-527.81,15.87Z"/>
                                </clipPath>
                            </defs>
                            <image href={photo} width="720" height="780" clipPath="url(#clipShape)"/>
                        </svg>
                    </Photo>
                </FlexWrapper>
            </StyledMain>
        </Container>
    );
};

const StyledMain = styled.div`
    position: relative;
    min-height: 526px;
    padding: 168px 0 86px;
`
const About = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    gap: 20px;
`
const MainText = styled.span`
    font-size: 40px;
    font-weight: 400;
    letter-spacing: 2px;
    word-spacing: 3px;
`

const MainTitle = styled.h1`
    font-weight: 400;
    font-size: 32px;
    letter-spacing: 2px;
    word-spacing: 3px;
    margin-bottom: 26px;
`

const Photo = styled.div`
    position: absolute;
    top: -100px;
    right: -100px;
    z-index: -1;
`

