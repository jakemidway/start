// import React from 'react';

import styled from "styled-components";
import {Logo} from "../../components/logo/Logo.tsx";
import {Menu} from "../../components/menu/Menu.tsx";

export const Header = () => {
    return (
        <div>
            <StyledHeader>
                <Logo/>
                <Menu/>
            </StyledHeader>
        </div>
    );
};

const StyledHeader = styled.header`
    display: flex;
    justify-content: space-between;
    background-color: #fff;
`
