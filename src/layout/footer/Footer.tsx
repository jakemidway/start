import styled from "styled-components";
import {Icon} from "../../components/icon/Icon.tsx";
import {FlexWrapper} from "../../components/FlexWrapper.tsx";


export const Footer = () => {
    return (
        <StyledFooter>
            <FlexWrapper direction="column" align="center">
                <Name> Jake Midway</Name>
                <SocialList>
                    <SocialItem>
                        <SocialLink>
                            <Icon iconId={'github'} width={"26px"} height={"26px"} viewBox={"0 0 26px 26px"}/>
                        </SocialLink>
                    </SocialItem>
                    <SocialItem>
                        <SocialLink>
                            <Icon iconId={'linkedin'} width={"26px"} height={"26px"} viewBox={"0 0 26px 26px"}/>
                        </SocialLink>
                    </SocialItem>
                    <SocialItem>
                        <SocialLink>
                            <Icon iconId={'instagram'} width={"26px"} height={"26px"} viewBox={"0 0 26px 26px"}/>
                        </SocialLink>
                    </SocialItem>
                    <SocialItem>
                        <SocialLink>
                            <Icon iconId={'facebook'} width={"26px"} height={"26px"} viewBox={"0 0 26px 26px"}/>
                        </SocialLink>
                    </SocialItem>


                </SocialList>
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

const SocialList = styled.ul`
    list-style: none;
    display: flex;
    gap: 1rem;
    margin-bottom: 26px;
`

const SocialItem = styled.li`

`

const SocialLink = styled.a`

`

const Copyright = styled.p`

`