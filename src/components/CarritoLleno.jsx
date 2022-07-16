import { useContext, useEffect } from 'react';
import { Contexto } from '../context/CartContext';

export const CarritoLleno = () => {

  const {removeProducto, precioTotal, localCarrito, carrito} = useContext(Contexto);

  useEffect(()=>{
    localCarrito();
  }, [])

  const productos = carrito?.map(({name, model, price, img, id, contador})=> {
    return(
      <>
      <div className='productoCarro'>    
        <div className='imagen'>
          <img className='productoCarro-img' src={img}></img>
        </div>
        <div>
          <p>{name}</p>
          <p>{model}</p>
          <p>${price}</p>
        </div>
        <div>
          <button className='botonCarro' onClick={()=>removeProducto(id)}>Borrar Todo</button>
          <button className='botonCarro' onClick={()=>{}}>Borrar 1</button>
          <p>Cantidad: {contador}</p>
        </div>
      </div>
      </>
    )
  });

  return (
      <div className='carro'>
        {productos}
        <p className='precioTotal'>Precio total: ${precioTotal()}</p>
      </div>
  )
}





