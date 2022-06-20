import React, { useState } from 'react';



export const ItemCount = ({initial, stock, onAdd}) => {
  const [contador, setContador] = useState(initial);

    return (
    <>
        <div className='contador'>
            <div className='contador-cantidad'>
                <button onClick={()=>{if(contador>1){setContador(contador-1)}}}>-</button>
                <p>Cantidad: {contador}</p>
                <button onClick={()=>{if(contador<stock){setContador(contador+1)}}}>+</button>
            </div>
            <button className='contador-carrito' onClick={()=> {onAdd(contador)}}>Agregar al carrito</button>
        </div>
    </>
  )
}
