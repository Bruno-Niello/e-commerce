import React, { useEffect, useState } from 'react';
import {ItemCount} from './ItemCount';

export const ItemDetail = ({detalle}) => {

const {stock, name, model, description, price, imgM, detail} = detalle;


  return (
    <>
      <div className=''>
        <img className='' src={imgM} />
        <h3 className=''>{name}</h3>
        <h4 className=''>{model}</h4>
        <h4 className=''>{price}</h4>
        <h5 className=''>{description}</h5>
        <h5 className=''>Stock: {stock}</h5>
        <p className=''>Detalle del producto: {detail}</p>
        <ItemCount stock={stock} initial={1}/>
      </div> 
    </>
) 

  
  


 
}
