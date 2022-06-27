//@ts-check
import React from 'react'
import { useContext } from 'react';
import { Contexto } from '../context/CartContext';
import { CarritoLleno } from './CarritoLleno';
import { CarritoVacio } from './CarritoVacio';

export const Carrito = () => {

  const { carrito, removeProducto, precioTotal, vaciar } = useContext(Contexto);

  if(carrito.length>0){
    return(
      <div className='carrito-container'>
        <CarritoLleno />
        <button className='vaciarCarrito' onClick={vaciar}>Vaciar Carrito</button>
      </div>
    ) 
  } else {
    return(
      <div className='carrito-container'>
        <CarritoVacio/>
      </div>
    )
  }
   
}
