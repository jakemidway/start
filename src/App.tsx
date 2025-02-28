import './App.css'
import styled from "styled-components";

function App() {
    return (
        <div className="App">

            <Title>Welcome to IT-INCUBATOR</Title>
            <Header>

            </Header>
            )

        </div>
    )
}

export default App

const Header = styled.header`
    background-color: aquamarine;
`


const Title = styled.h1`
    font-size: 1.5em;
    text-align: center;
    color: #e91e63;
`;