import "./App.css";
import Header from "./Header";
import Inicio from "./paginas/Inicio";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Herramientas from "./paginas/herramientas";
import Materiales from "./paginas/materiales";
import Redes from "./redes";
import Electrodomesticos from "./electrodomesticos";


function App() {

  return (
    <div className="app">

      <h1 class='elegantshadow'>FERRETER</h1>

      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/Inicio" element={<Inicio />} />
          <Route path="materiales" element={<Materiales/>} />
          <Route path="/herramientas" element={<Herramientas />} />
          <Route path="/redes" element={<Redes />} />
          <Route path="/electrodomesticos" element={<Electrodomesticos/>} />



        </Routes>
      </BrowserRouter>
      <center className="imagen_p"><img alt="Imagen" src="http://cdn.shopify.com/s/files/1/0306/2104/0780/collections/Icono_Ferreteria-01_1200x1200.png?v=1628189353" VSPACE="50px"></img></center>
    </div>

    
  );
}

export default App;
