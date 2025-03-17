import styled from "styled-components";
import {FlexWrapper} from "../../components/FlexWrapper.tsx";


export const Footer = () => {
    return (
        <StyledFooter>
            <FlexWrapper direction="column" align="center">
                <Name> Jake Midway</Name>

                <Copyright>Copyright ©2020 All rights reserved </Copyright>
            </FlexWrapper>

        </StyledFooter>

    );
};

const StyledFooter = styled.footer`
    padding: 48px 0;
`

const Name = styled.span`
    margin-bottom: 26px;
`



const Copyright = styled.p`

`