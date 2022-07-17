import {useState, createContext, useEffect} from 'react';
import Swal from 'sweetalert2';

export const Contexto = createContext({});

export default function CartContext({children}) {

  const [carrito, setCarrito] = useState([]);
  const [mostrarAlerta, setMostrarAlerta] = useState(true);

  useEffect(()=>{
    localCarrito();
  }, [])

  // comprobar si el producto existe en el carrito
  const comprobar = (id) => {
    return carrito.some(x => x.id === id)
  };

  //agregar un producto al carrito y mantenerlo con localstorage. en caso de existir, aumenta su cantidad. 
  const addProducto = (item, contador, id) => {

    const nuevoItem = {...item, id, contador};
    
    if(comprobar(nuevoItem.id)){
      const buscar = carrito.find(x => x.id === nuevoItem.id);
      const indice = carrito.indexOf(buscar);
      const nuevoArray = [...carrito];
      const total = nuevoArray[indice].contador += contador;
      if(total > nuevoItem.stock){
        setMostrarAlerta(false);
      }else{
        setMostrarAlerta(true);
        setCarrito(nuevoArray);
        window.localStorage.setItem(id, JSON.stringify(nuevoArray[indice]))
      }    
    }else{
      setMostrarAlerta(true);
      setCarrito([...carrito, nuevoItem]);
      window.localStorage.setItem(id, JSON.stringify(nuevoItem))
    }
  };

  // eliminar productos por id
  const removeProducto = (id) => {
    const nuevoCarrito = carrito.filter(x => x.id !== id);
    setCarrito(nuevoCarrito);
    window.localStorage.removeItem(id);
  };

  // vaciar el carrito y el localstorage
  const vaciar = () => {
    setCarrito([]);
    localStorage.clear();
  };

  // mostrar cantidad de productos en el carrito
  const cantidadTotal = () => {
    return carrito.reduce((acc, x) => acc += x.contador, 0)
  }

  // mostrar el precio total de todos los items del carrito
  const precioTotal = () => {
    return carrito.reduce((acc, x)=> acc += x.contador * x.price, 0)
  }

  //usar el local storage para mostrar productos en el checkout
  const localCarrito = () => {
    let arrayLocal = Object.values(localStorage);
    if (arrayLocal.length > 0){
      let arrayCarrito = [];
      for(let i=0; i<arrayLocal.length; i++){
        arrayCarrito.push(JSON.parse(arrayLocal[i]));
      }
      setCarrito(arrayCarrito);
    }
  }

  //funcion para borrar un solo item (disminuir cantidad, si tengo 5 pipas, bajar a 4 pipas) no completado por falta de tiempo

  // const removeUno = () => {
  //   const buscar = carrito.find(x => x.id === nuevoItem.id);
  //   const indice = carrito.indexOf(buscar);
  //   const nuevoArray = [...carrito];
  //   nuevoArray[indice].contador -= contador;
  // }

  return (
    <Contexto.Provider value={{carrito, mostrarAlerta, setCarrito, addProducto, removeProducto, vaciar, comprobar, cantidadTotal, precioTotal, localCarrito}}>
      {children}
    </Contexto.Provider>
  )
}
