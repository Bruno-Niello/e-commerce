import React, { useState } from 'react';
import CartContext from '../context/CartContext';



export const ItemCount = ({initial, stock, onAdd}) => {
  const [contador, setContador] = useState(initial);

  const sumar = () => {
    if(contador<stock){
      setContador(contador+1)
    }
  };
  const restar = () => {
    if(contador>1){
      setContador(contador-1)
    }
  };
  const reset = () => {
    setContador(initial)
  }

    return (
    <>
        <div className='contador'>
            <div className='contador-cantidad'>
                <button onClick={()=>{restar(contador)}}>-</button>
                <p>Cantidad: {contador}</p>
                <button onClick={()=>{sumar(contador)}}>+</button>
            </div>
            <button className='contador-carrito' onClick={()=> {onAdd(contador); reset()}}>Agregar al carrito</button>
        </div>
    </>
  )
}
