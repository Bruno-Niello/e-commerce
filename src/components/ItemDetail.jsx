import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { ItemCount } from './ItemCount';

export const ItemDetail = ({detalle}) => {

  const { id } = useParams();
  const [producto, setProducto] = useState();



  useEffect(() => {
    
    switch(id){
      case "1":
        setProducto(detalle[0]);
        break;
      case "2":
        setProducto(detalle[1]);
        break;
      case "3":
        setProducto(detalle[2]);
        break;
      default:
        break;  
    }
    
    console.log(producto)
    console.log(id)
    console.log(detalle)

    //los 3 consoles log me tiran los datos que necesito, pero no puedo imprimirlos!
    //y si saco el setTimeout se rompe todo

    setTimeout(()=>{
      return (
      
        <div className=''>
          <img className='' src={producto.img} />
          <h3 className=''>{producto.name}</h3>
          <h4 className=''>{producto.model}</h4>
          <h4 className=''>{producto.price}</h4>
          <h5 className=''>{producto.description}</h5>
          <h5 className=''>Stock: {producto.stock}</h5>
          <p className=''>Detalle del producto: {producto.detail}</p>
          <ItemCount stock={producto.stock} initial={1}/>
        </div> 
      )
    }, 2000)

  }, [id])

  
  


 
}
