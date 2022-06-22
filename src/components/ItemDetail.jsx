import React, { useEffect, useState } from 'react';
import {ItemCount} from './ItemCount';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { Contexto } from '../context/CartContext';

export const ItemDetail = ({detalle}) => {

const [mostrar, setMostrar] = useState(false);

const {stock, name, model, description, price, imgM, detail} = detalle;

const { comprobar, addProducto } = useContext(Contexto);

const onAdd = (contador) => {
  setMostrar(true);
  comprobar(detalle.id);
  addProducto(detalle, contador);
  console.log("se ejecuto")
}

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
        {mostrar ? 
          <><div>
            <Link className='card-details' to="../">Seguir comprando</Link>
            <Link className='card-details' to="../carrito">Ir al carrito</Link>
          </div></> : 
          <ItemCount stock={stock} initial={1} onAdd={onAdd}/>}
      </div> 
    </>
) 

  
  


 
}
