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
                    <Photo src={photo}/>
                </FlexWrapper>
            </StyledMain>
        </Container>
    );
};

const StyledMain = styled.div`
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
const MainText= styled.span`
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

const Photo = styled.img`
    width: 550px;
    height: 550px;
    border-radius: 50%;
`

