import styled from "styled-components";
import photo from "./../../../assets/img/i22.jpg"
import {FlexWrapper} from "../../../components/FlexWrapper.tsx";
import {Container} from "../../../components/Container.tsx";

export const Main = () => {
    return (
        <Container>
            <StyledMain>
                <FlexWrapper justify="space-between">
                    <About>
                        <span>I'm Medvetskiy Evgeny</span>
                        <h1>Web-developer, The Creator</h1>
                        <button>Download Resume</button>
                    </About>
                    <Photo src={photo}/>
                </FlexWrapper>
            </StyledMain>
        </Container>
    );
};

const StyledMain = styled.div`
    min-height: 526px;
    padding: 210px 0 70px;
    
`
const About = styled.div`
    
`
const Photo = styled.img`
    width: 350px;
    height: 350px;
`
