import styled from "styled-components";


export const Menu = (props: {menuItems: Array<string>}) => {
    return (
        <StyledMenu>
            <ul>

                {props.menuItems.map((item, index) => {
                    return (
                        <li key={index}><a href="#">{item}</a></li>
                    )
                })}

            </ul>
        </StyledMenu>
    );
};


const StyledMenu = styled.nav`
    display: flex;
    align-items: center;
    & ul {
        display: flex;
        gap: 30px;
    }
`
