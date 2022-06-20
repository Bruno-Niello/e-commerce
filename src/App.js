import React from 'react';
import '../src/styles/App.css';
import { NavBar } from './components/NavBar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home } from './components/Home';
import { Nosotros } from './components/Nosotros';
import { Tabacos } from './components/Tabacos';
import { Accesorios } from './components/Accesorios';
import { Pipas } from './components/Pipas';
import { ItemDetailContainer } from './components/ItemDetailContainer';
import { Producto } from './components/Producto';
import { Carrito } from './components/Carrito';


function App() {
  
  return (
    <>   
    <BrowserRouter>
    
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
    </BrowserRouter>
    
    
    </>

  );
}

export default App;
