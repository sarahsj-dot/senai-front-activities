import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Home } from "./pages/Home"
import { Sobre } from "./pages/Sobre"
import { Contato } from "./pages/Contato"
import { Page404 } from "./pages/Page404"


function App() {

  return (
   <BrowserRouter>

   <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/sobre" element={<Sobre/>}/>
    <Route path="/contato" element={<Contato/>}/>
    <Route path="*" element={<Page404/>}/>
   </Routes>

   </BrowserRouter>
  )
}

export default App
