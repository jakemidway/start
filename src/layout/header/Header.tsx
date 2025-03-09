import styled from "styled-components";
import {Logo} from "../../components/logo/Logo.tsx";
import {Menu} from "../../components/menu/Menu.tsx";
import {Container} from "../../components/Container.tsx";

const items = ["Work", "Block", "Contact"];


export const Header = () => {
    return (
        <Container>
            <StyledHeader>
                <Logo/>
                <Menu menuItems={items}/>
            </StyledHeader>
        </Container>
    );
};

const StyledHeader = styled.header`
    display: flex;
    justify-content: space-between;
    padding: 27px 0;
`
