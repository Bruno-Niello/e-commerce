import React from 'react'
import { Link } from 'react-router-dom';

export const CarritoVacio = () => {
  return (
    <div className='carritoVacio'>
        <p className='carritoVacio-text'>No hay nada en tu carrito!</p>  
        <Link className='carritoVacio-link' to='../'>Comprar algo</Link>     
    </div>
  )
}
