//@ts-check
import React from 'react'
import { Link } from 'react-router-dom'
import { ItemCount } from './ItemCount'
import { useContext } from 'react';
import { Contexto } from '../context/CartContext';


export const Item = (props) => {

  const { comprobar, addProducto } = useContext(Contexto);

  const onAdd = (contador) => {
    comprobar(props.id);
    addProducto(props, contador);
    alert(`agregaste ${contador}`)
    console.log("se ejecuto")
  }
 

  return (
    <>
    <div className='card'>
        <img className='card-img' src={props.img} />
        <div className='card-text'>
          <h3 className='card-name'>{props.name}</h3>
          <h4 className='card-model'>{props.model}</h4>
          <h4 className='card-price'>${props.price}</h4>
          <h5 className='card-description'>{props.description}</h5>
          <h5 className='card-stock'>Stock: {props.stock}</h5>
        </div>
        <Link className='card-details' to={'/producto/' + (props.id)}>Detalles</Link>
        <ItemCount stock={props.stock} initial={1} onAdd={onAdd}/>
    </div>
    <br/>
    </>
  )
}
