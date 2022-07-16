import { useState } from 'react';
import { NavBarLinks } from './NavBarLinks';


export const NavBar = () => {

    const [search, setSearch] = useState(); //estado para el filtro de busqueda

    return (
    <>
        <nav className='nav'>
            <NavBarLinks/>

            {/* Filtro de busqueda cancelado por falta de tiempo. Ver en la version 1.0 */}

            {/* <input onChange={(e) => setSearch(e.target.value)}></input>
            {console.log(search)} */}
        </nav>
    </>
    );
  }
  