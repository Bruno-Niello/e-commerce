import { Link } from 'react-router-dom';
import { ItemCount } from './ItemCount';
import { useContext } from 'react';
import { Contexto } from '../context/CartContext';
import Swal from 'sweetalert2';


export const Item = (props) => {

  const { comprobar, addProducto, mostrarAlerta } = useContext(Contexto);

  const onAdd = (contador) => {
    comprobar(props.id);
    addProducto(props, contador, props.id);
    if(mostrarAlerta){
    Swal.fire({
      title: `Se agregaron ${contador} ${props.name} ${props.model}`,
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
