//@ts-check
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import '../src/styles/App.css';
import { Carrito } from './components/Carrito';
import { Checkout } from './components/Checkout';
import { Home } from './components/Home';
import { NavBar } from './components/NavBar';
import { Nosotros } from './components/Nosotros';
import { Producto } from './components/Producto';
import Contexto from './context/CartContext';
import { initializeApp } from "firebase/app";
import ItemDetailContainer from './components/ItemDetailContainer';
import ItemListContainer from './components/ItemListContainer';


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
    <BrowserRouter>
      <Contexto>
          <div className="App grid-container">
            <NavBar />
          </div>
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/nosotros" element={<Nosotros/>}/>
            <Route path="/categoria/:id" element={<ItemListContainer/>}/>
            <Route path="/producto" element={<Producto/>}/>
            <Route path="/producto/:id" element={<ItemDetailContainer/>}/>
            <Route path="/carrito" element={<Carrito/>}/>
            <Route path="/carrito/checkout" element={<Checkout/>}/>
          </Routes>
      </Contexto>
    </BrowserRouter>
  );
}

export default App;
