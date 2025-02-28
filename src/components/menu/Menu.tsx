import styled from "styled-components";


export const Menu = () => {
    return (
        <StyledMenu>
            <ul>
                <li><a href="#">Work</a></li>
                <li><a href="#">Block</a></li>
                <li><a href="#">Contact</a></li>
            </ul>
        </StyledMenu>
    );
};


const StyledMenu = styled.nav`
    & ul {
        display: flex;
        gap: 30px;
    }
`
