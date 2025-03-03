import './App.css'
import {Header} from "./layout/header/Header.tsx";
import {Main} from "./layout/sections/main/Main.tsx";
import {Footer} from "./components/test/Footer.tsx"
import {Skills} from "./layout/sections/skills/Skills.tsx";
import {Work} from "./layout/sections/work/Work.tsx";

function App() {

    return (
        <div className="App">


            <Header />
            <Main />
            <Skills />
            <Footer />
            <Work />


        </div>
    )
}







export default App



