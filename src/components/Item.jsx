import React from 'react'
import { ItemCount } from './ItemCount'


export const Item = (props) => {

  const onAdd = () => {}

  return (
    <>
    <div className='card'>
        <img className='card-img' src={props.img} />
        <h3 className='card-name'>{props.name}</h3>
        <h4 className='card-model'>{props.model}</h4>
        <h4 className='card-price'>{props.price}</h4>
        <h5 className='card-description'>{props.description}</h5>
        <ItemCount stock={props.stock} initial={1} onAdd={onAdd}/>
    </div>
    <br/>
    </>
  )
}
