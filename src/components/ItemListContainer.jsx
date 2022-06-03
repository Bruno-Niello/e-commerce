import { ItemList } from './ItemList';
import { ListadoMostrar } from './ListadoMostrar';

export default function Listado() {
  let padel = ["peretti", "negro", "elian", "roque"];
  padel.push("santiago");
  return (
  <> 
    <div className='container-shop'>
      <ItemList />
    </div>
    <hr></hr>
    <div className='miembros'>
      <p className='miembros_titulo'>Nuestros miembros:</p>
      <div className='miembros_lista'>
        <ListadoMostrar padel={padel}/>
      </div>
    </div>
  </>
  )
}
