import CartWidget from './CartWidget';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { NavBarLinks } from './NavBarLinks';


export const NavBar = () => {
    const [search, setSearch] = useState();
    return (
    <>
        <nav className='nav'>
            <NavBarLinks/>
            <input onChange={(e) => setSearch(e.target.value)}></input>
            {console.log(search)}
        </nav>
    </>
    );
  }
  