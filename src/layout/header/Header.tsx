import styled from "styled-components";
import {Logo} from "../../components/logo/Logo.tsx";
import {Menu} from "../../components/menu/Menu.tsx";

const items = ["Work", "Block", "Contact"];


export const Header = () => {
    return (
        <div>
            <StyledHeader>
                <Logo/>
                <Menu menuItems={items}/>
            </StyledHeader>
        </div>
    );
};

const StyledHeader = styled.header`
    display: flex;
    justify-content: space-between;
    background-color: #fff;
`
