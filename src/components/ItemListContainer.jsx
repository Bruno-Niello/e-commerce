import '../styles/ItemListaContainer.css'
import { ListadoMostrar } from './ListadoMostrar';

export default function Listado() {
  let padel = ["peretti", "negro", "elian", "roque"];
  padel.push("santiago");
  return (
    <div class="miembros">
      <p class="miembros_titulo">Nuestros miembros:</p>
      <div class="miembros_lista">
        <ListadoMostrar padel={padel}/>
      </div>
    </div>
  )
}
