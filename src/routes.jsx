import { BrowserRouter,Routes,Route } from "react-router"
import Inicio from "./pages/inicio"
import Projetos from "./pages/projetos"


export default function Navegar(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Inicio/>} />
                <Route path="/projetos" element={<Projetos/>} />
            </Routes>
        </BrowserRouter>
    )
}