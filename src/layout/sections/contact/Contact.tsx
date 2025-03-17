import {Container} from "../../../components/Container.tsx";
import {FlexWrapper} from "../../../components/FlexWrapper.tsx";
import {SectionTitle} from "../../../components/SectionTitle.tsx";
import styled from "styled-components";
import {theme} from "../../../styles/Theme.styled.tsx";
import {Icon} from "../../../components/icon/Icon.tsx";


export const Contact = () => {
    return (
        <div>
            <Container>
                <FlexWrapper>
                    <ContactInfo>
                        <SectionTitle title={"Contact me"}/>
                        <p>I am always open to suggestions</p>
                        <FlexWrapper justify={"flex-start"} gap={"82px"}>
                            <div>
                                <p>Mail me at</p>
                                <a href="#">jakemidway@gmail.com</a>
                            </div>
                            <div className="contact__soc">
                                <p className="contact__text-for-link">Fallow me</p>
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
                            </div>
                        </FlexWrapper>
                    </ContactInfo>
                    <div className="contact__right-side">
                        <form className="form" action="mail">

                            <input className="form__inpt" type="text" name="name" placeholder="Youre name" required/>
                            <input className="form__inpt" type="email" name="emailAddres" placeholder="Youre email adress"
                                   required/>

                            <textarea className="form__inpt form__textarea" name="message" id="" rows="4"
                                      placeholder="Your project description" required></textarea>

                            <button className="form__btn" type="submit">GO</button>
                        </form>
                    </div>
                </FlexWrapper>
            </Container>
        </div>
    );
};

const ContactInfo = styled.div`
    border: 1px solid ${theme.colors.light};
    width: 50%;
    & > p {
        margin-bottom: 30px;
    }
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