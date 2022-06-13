import React, { useEffect, useState } from 'react';
import {ItemCount} from './ItemCount';

export const ItemDetail = ({detalle}) => {

const {stock, name, model, description, price, imgM, detail} = detalle;


  return (
    <>
      <div className='detail'>
        <img className='detail-img' src={imgM} />
        <h3 className='detail-name'>{name}</h3>
        <h4 className='detail-model'>{model}</h4>
        <h4 className='detail-price'>{price}</h4>
        <h5 className='detail-description'>{description}</h5>
        <h5 className='detail-stock'>Stock: {stock}</h5>
        <p className='detail-detail'>Detalle del producto: {detail}</p>
        <ItemCount stock={stock} initial={1}/>
      </div> 
    </>
) 

  
  


 
}
