//@ts-check
import React from 'react'
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { Contexto } from '../context/CartContext';
import { CarritoLleno } from './CarritoLleno';
import { CarritoVacio } from './CarritoVacio';
import {Footer} from './Footer';

export const Carrito = () => {

  const { carrito, removeProducto, precioTotal, vaciar } = useContext(Contexto);

  if(carrito.length>0){
    return(
      <>
      <div className='carrito-container'>
        <CarritoLleno />
        <div className='carrito-botones'>
          <button className='vaciarCarrito' onClick={vaciar}>Vaciar Carrito</button>
          <Link className='vaciarCarrito' to="/carrito/checkout">Terminar Compra</Link>
          <Link className='vaciarCarrito' to="../">Agregar más productos</Link>
        </div>
      </div>
      <Footer/>
      </>
    ) 
  } else {
    return(
      <>
      <div className='carrito-container'>
        <CarritoVacio/>
      </div>
      <Footer/>
      </>
    )
  }
   
}
