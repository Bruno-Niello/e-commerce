import { useState } from 'react';
import { createContext } from 'react';
// import { cantidad } from '../components/ItemCount';

export const Contexto = createContext({});

export default function CartContext({children}) {

  const [carrito, setCarrito] = useState([]);

  const buscarProducto = () => {
    
  }
// some
  const comprobar = (id) => {
    return carrito.some(x => x.id === id)
  };
//
  const addProducto = (item, contador) => {
    const nuevoItem = {...item, contador};
    console.log(carrito)
    if(comprobar(nuevoItem.id)){
      const buscar = carrito.find(x => x.id === nuevoItem.id)
      const indice = carrito.indexOf(buscar)
      const nuevoArray = [...carrito]
      nuevoArray[indice].contador += contador
      setCarrito(nuevoArray)
    }else{setCarrito([...carrito, nuevoItem])}
  };
  // filter
  const removeProducto = (id) => {
    return setCarrito(carrito.filter(x => x.id !== id));
  };
  //
  const vaciar = () => {
    setCarrito([]);
  };

  // reduce
  const cantidadTotal = () => {
    return carrito.reduce((acc, x) => acc += x.contador, 0)
  }
  // reduce
  const precioTotal = () => {
    return carrito.reduce((acc, x)=> acc += x.contador * x.price, 0)
  }
  

  return (
    <Contexto.Provider value={{carrito, setCarrito, addProducto, removeProducto, vaciar, comprobar, cantidadTotal, precioTotal}}>
      {children}
    </Contexto.Provider>
  )
}
