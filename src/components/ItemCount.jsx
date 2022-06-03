import React, { useState } from 'react';



export const ItemCount = (props) => {
  const [contador, setContador] = useState(props.initial);

    return (
    <>
        <div className='contador'>
            <div className='contador-cantidad'>
                <button onClick={()=>{if(contador>0){setContador(contador-1)}}}>-</button>
                <p>Cantidad: {contador}</p>
                <button onClick={()=>{if(contador<props.stock){setContador(contador+1)}}}>+</button>
            </div>
            <button className='contador-carrito' onClick={()=>{alert(`usted sumo al carrito ${contador} productos`)}}>Agregar al carrito</button>
        </div>
    </>
  )
}
