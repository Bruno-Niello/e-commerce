//@ts-check
import React from 'react'
import { useContext } from 'react';
import { Contexto } from '../context/CartContext';
import {CarritoVacio} from './CarritoVacio';

export const CarritoLleno = () => {

const {removeProducto, precioTotal, carrito} = useContext(Contexto);


const productos = carrito?.map(({name, model, price, img, id, contador})=> {
  return(
  <>
  <div className='productoCarro'>    
    <div>
      <img className='productoCarro-img' src={img}></img>
    </div>
    <div>
      <p>{name}</p>
      <p>{model}</p>
      <p>${price}</p>
    </div>
    <div>
      <button className='botonCarro' onClick={()=>removeProducto(id)}>Borrar Todo</button>
      <button className='botonCarro' onClick={()=>{}}>Borrar 1</button>
      <p>Cantidad: {contador}</p>
    </div>
  </div>
  </>)
})



  console.log(carrito)

  return (
      <div className='carro'>
        {productos}
        <p>Precio total: ${precioTotal()}</p>
      </div>
  )
}





