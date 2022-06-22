//@ts-check
import React from 'react';
import '../src/styles/App.css';
import { NavBar } from './components/NavBar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home } from './components/Home';
import { Nosotros } from './components/Nosotros';
import { Tabacos } from './components/Tabacos';
import { Accesorios } from './components/Accesorios';
import { Pipas } from './components/Pipas';
import { Producto } from './components/Producto';
import { Carrito } from './components/Carrito';
import Contexto from './context/CartContext';


function App() {
  
  return (
    <>   
    <BrowserRouter>
      <Contexto>
          <div className="App grid-container">
            <NavBar />
          </div>
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/categoria/pipas" element={<Pipas/>}/>
            <Route path="/nosotros" element={<Nosotros/>}/>
            <Route path="/categoria/tabacos" element={<Tabacos/>}/>
            <Route path="/categoria/accesorios" element={<Accesorios/>}/>
            <Route path="/producto" element={<Producto/>}/>
            <Route path="/producto/:id" element={<Producto/>}/>
            <Route path="/carrito" element={<Carrito/>}/>
          </Routes>
      </Contexto>
    </BrowserRouter>
    
    
    </>

  );
}

export default App;
