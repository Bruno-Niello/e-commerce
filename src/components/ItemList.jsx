import React from 'react';
import { Item } from './Item';



export const ItemList = ({items}) => {

  return (
    <>
        <h1 className='pipas'>Pipas:</h1>
        <div className='container-pipas'>
            
              {items?.map(items => <Item stock={items.stock} name={items.name} model={items.model} description={items.description} price={items.price} img={items.img} key={items.id}/>)}
            
        </div>
    </>
  )
}

