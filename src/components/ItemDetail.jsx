import { useState, useContext } from 'react';
import {ItemCount} from './ItemCount';
import { Link } from 'react-router-dom';
import { Contexto } from '../context/CartContext';
import Swal from 'sweetalert2';

export const ItemDetail = ({detalle}) => {

const [mostrar, setMostrar] = useState(false);

const {stock, name, model, description, price, imgM, detail} = detalle;

const { comprobar, addProducto, mostrarAlerta } = useContext(Contexto);

const onAdd = (contador) => {
  setMostrar(true);
  comprobar(detalle.id);
  addProducto(detalle, contador);
  if(mostrarAlerta){
    Swal.fire({
      title: `Se agregaron ${contador} ${name} ${model}`,
      width: 600,
      padding: '3em',
      iconColor: '#880404',
      color: '#880404',
      background: 'url(https://firebasestorage.googleapis.com/v0/b/mefe-pipas.appspot.com/o/fondo-cards.gif?alt=media&token=746a760a-08df-4ff9-80e0-58ed1aacabae)',
      confirmButtonText: 'Entendido!',
      confirmButtonColor: '#880404'
    })}else{
      Swal.fire({
        title: 'No hay suficiente stock',
        width: 600,
        padding: '3em',
        iconColor: '#880404',
        color: '#880404',
        background: 'url(https://firebasestorage.googleapis.com/v0/b/mefe-pipas.appspot.com/o/fondo-cards.gif?alt=media&token=746a760a-08df-4ff9-80e0-58ed1aacabae)',
        confirmButtonText: 'Entendido!',
        confirmButtonColor: '#880404'
      })
    }
}

  return (
    <>
      <div className='detail'>
        <img className='detail-img' src={imgM} />
        <h3 className='detail-name'>{name}</h3>
        <div className='detail-text'>
          <h4 className='detail-model'>{model}</h4>
          <h4 className='detail-price'>${price}</h4>
          <h5 className='detail-description'>{description}</h5>
          <h5 className='detail-stock'>Stock: {stock}</h5>
        </div>
        <p className='detail-detail'>Detalle del producto: {detail}</p>
        {mostrar ? 
          <>
          <div>
            <Link className='card-details' to="../">Seguir comprando</Link>
            <Link className='card-details' to="../carrito">Ir al carrito</Link>
          </div>
          </> : 
          <ItemCount stock={stock} initial={1} onAdd={onAdd}/>}
      </div> 
    </>
) 

  
  


 
}
