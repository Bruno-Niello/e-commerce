//@ts-check
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import '../src/styles/App.css';
import { Accesorios } from './components/Accesorios';
import { Carrito } from './components/Carrito';
import { Checkout } from './components/Checkout';
import { Home } from './components/Home';
import { NavBar } from './components/NavBar';
import { Nosotros } from './components/Nosotros';
import { Pipas } from './components/Pipas';
import { Producto } from './components/Producto';
import { Tabacos } from './components/Tabacos';
import Contexto from './context/CartContext';
import { initializeApp } from "firebase/app";
import ItemDetailContainer from './components/ItemDetailContainer';


function App() {
  
  const firebaseConfig = {
    apiKey: "AIzaSyDOuAWK2JPL4kiWs0BJ1hz4ua0Bomprzf4",
    authDomain: "mefe-pipas.firebaseapp.com",
    projectId: "mefe-pipas",
    storageBucket: "mefe-pipas.appspot.com",
    messagingSenderId: "838799554959",
    appId: "1:838799554959:web:8f13ec924775bfdcc373fa"
  };
  
  initializeApp(firebaseConfig);

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
            <Route path="/producto/:id" element={<ItemDetailContainer/>}/>
            <Route path="/carrito" element={<Carrito/>}/>
            <Route path="/carrito/checkout" element={<Checkout/>}/>
          </Routes>
      </Contexto>
    </BrowserRouter>
    
    
    </>

  );
}

export default App;
