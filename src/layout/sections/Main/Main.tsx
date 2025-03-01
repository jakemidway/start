import styled from "styled-components";

export const Main = () => {
    return (
        <div>
            <div>
                <span>I'm Medvetskiy Evgeny</span>
                <h1>Web-developer, The Creator</h1>
            </div>
            <Photo src="./../../../assets/img/i22.jpg"/>
        </div>
    );
};

const Photo = styled.img`
    width: 350px;
    height: 350px;
`