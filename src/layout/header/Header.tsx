import styled from "styled-components";
import {Logo} from "../../components/logo/Logo.tsx";
import {Menu} from "../../components/menu/Menu.tsx";
import {Container} from "../../components/Container.tsx";
import {theme} from "../../styles/Theme.styled.tsx";
import {FlexWrapper} from "../../components/FlexWrapper.tsx";

const items = ["Work", "Block", "Contact"];


export const Header = () => {
    return (
        <StyledHeader>
            <Container>
                <FlexWrapper justify="space-between">
                    <Logo/>
                    <Menu menuItems={items}/>
                </FlexWrapper>
            </Container>
        </StyledHeader>
    );
};

const StyledHeader = styled.header`
    padding: 27px 0;
    background-color: ${theme.colors.accentDarkSecond};
`
