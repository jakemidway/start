
import styled from "styled-components";
import {Icon} from "../../components/icon/Icon.tsx";
import {FlexWrapper} from "../../components/FlexWrapper.tsx";


export const Footer = () => {
    return (
        <StyledFooter>
            <FlexWrapper direction="column" align="center" >
                <Name> Jake Midway</Name>
                <SocialList>
                    <SocialItem>
                        <SocialLink>
                            <Icon iconId={'inst'} width={"26px"} height={"26px"} viewBox={"0 0 26px 26px"} />
                        </SocialLink>
                    </SocialItem>
                    <SocialItem>
                        <SocialLink>
                            <Icon iconId={'lkdin'} width={"26px"} height={"26px"} viewBox={"0 0 26px 26px"} />
                        </SocialLink>
                    </SocialItem>
                    <SocialItem>
                        <SocialLink>
                            <Icon iconId={'facebook'} width={"26px"} height={"26px"} viewBox={"0 0 26px 26px"} />
                        </SocialLink>
                    </SocialItem>



                </SocialList>
                <Copyright>dsfsf</Copyright>
            </FlexWrapper>

        </StyledFooter>

    );
};

const StyledFooter = styled.footer`

`

const Name = styled.span`

`

const SocialList = styled.ul`
    list-style: none;
    display: flex;
    gap: 1rem;
`

const SocialItem = styled.li`

`

const SocialLink = styled.a`

`

const Copyright = styled.p`

`