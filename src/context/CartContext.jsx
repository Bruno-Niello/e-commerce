//@ts-check
import { useEffect } from 'react';
import { useState } from 'react';
import { createContext } from 'react';
// import { cantidad } from '../components/ItemCount';

export const Contexto = createContext({});

export default function CartContext({children}) {

  const [carrito, setCarrito] = useState([]);

  // useEffect(()=>{
  //   obtenerLocalStorage();
  // }, []);


// some
  const comprobar = (id) => {
    return carrito.some(x => x.id === id)
  };
//
  const addProducto = (item, contador) => {

    const nuevoItem = {...item, contador};
    
    if(comprobar(nuevoItem.id)){
      const buscar = carrito.find(x => x.id === nuevoItem.id);
      const indice = carrito.indexOf(buscar);
      const nuevoArray = [...carrito];
      nuevoArray[indice].contador += contador;
      setCarrito(nuevoArray);
      guardarLocalStorage(nuevoArray);
    }else{
      const nuevoArray = [...carrito, nuevoItem];
      setCarrito(nuevoArray);
      guardarLocalStorage(nuevoArray);
    }
  };
  // eliminar producto por id
  const removeProducto = (id) => {
    return setCarrito(carrito.filter(x => x.id !== id));
  };
  // vaciar el carrito 
  const vaciar = () => {
    setCarrito([]);
    guardarLocalStorage([]);
  };

  // mostrar cantidad de productos en el carrito
  const cantidadTotal = () => {
    return carrito.reduce((acc, x) => acc += x.contador, 0)
  }
  // mostrar el precio total de todos los items del carrito
  const precioTotal = () => {
    return carrito.reduce((acc, x)=> acc += x.contador * x.price, 0)
  }
  // cantidad de un solo producto
  // const removeUno = (id) => {
  //   return setCarrito()
  // }
  //guardar local storage
  const guardarLocalStorage = ( carrito ) => {
    localStorage.setItem("carrito", JSON.stringify(carrito));
  }
  //obtener local storage
  const obtenerLocalStorage = () => {
    if(localStorage.getItem("carrito")){
      setCarrito(JSON.parse(localStorage.getItem("carrito")));
    }
  }

  return (
    <Contexto.Provider value={{carrito, setCarrito, addProducto, removeProducto, vaciar, comprobar, cantidadTotal, precioTotal}}>
      {children}
    </Contexto.Provider>
  )
}

// carrito.reduce((acc, x)=> acc += x.contador * x.price, 0)