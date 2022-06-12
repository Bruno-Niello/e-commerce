import React from 'react';
import '../src/styles/App.css';
import { NavBar } from './components/NavBar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home } from './components/Home';
import { Nosotros } from './components/Nosotros';
import { Tabacos } from './components/Tabacos';
import { Accesorios } from './components/Accesorios';
import { Pipas } from './components/Pipas';
import { Bebidas } from './components/Bebidas';
import { ItemDetailContainer } from './components/ItemDetailContainer';


function App() {
  
  return (
    <>   
    <BrowserRouter>
    
      <div className="App grid-container">
        <NavBar />
      </div>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/pipas" element={<Pipas/>}/>
        <Route path="/nosotros" element={<Nosotros/>}/>
        <Route path="/tabacos" element={<Tabacos/>}/>
        <Route path="/accesorios" element={<Accesorios/>}/>
        <Route path="/bebidas" element={<Bebidas/>}/>
        <Route path="/producto/:id" element={<ItemDetailContainer/>}/>
      </Routes>
    </BrowserRouter>
    
    
    </>

  );
}

export default App;
