import styled from "styled-components";
import {theme} from "../../styles/Theme.styled.tsx";


export const Menu = (props: {menuItems: Array<string>}) => {
    return (
        <StyledMenu>
            <StyledMenuList>

                {props.menuItems.map((item, index) => {
                    return (
                        <StyledMenuItem key={index}><a href="#">{item}</a></StyledMenuItem>
                    )
                })}

            </StyledMenuList>
        </StyledMenu>
    );
};


const StyledMenu = styled.nav`
    display: flex;
    align-items: center;
`

const StyledMenuList = styled.ul`
    display: flex;
    gap: 30px;
`
const StyledMenuItem = styled.li`
    a{
        color: ${theme.colors.light};
        position: relative;
        transition: all 0.1s ease-in;

        &:after {
            position: absolute;
            bottom: -3px;
            left: 50%;
            display: block;
            content: ' ';
            width: 0;
            height: 2px;
            background-color: ${theme.colors.accent};
            opacity: 0;
            transition: all 0.2s ease-in;
        }

        &:hover {
            color: ${theme.colors.accent};

            &:after {
                width: 100%;
                left: 0;
                opacity: 1;
            }
        }
    }
    
`

