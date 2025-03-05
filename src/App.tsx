import './App.css'
import {Header} from "./layout/header/Header.tsx";
import {Main} from "./layout/sections/main/Main.tsx";
import {Skills} from "./layout/sections/skills/Skills.tsx";
import {Work} from "./layout/sections/work/Work.tsx";
import {Footer} from "./layout/footer/Footer.tsx";


function App() {

    return (
        <div className="App">


            <Header />
            <Main />
            <Skills />

            <Work />
            <Footer />

        </div>
    )
}







export default App



