import React, { memo } from 'react'
import CartWidget from './CartWidget';
import {Link} from 'react-router-dom';

export const NavBarLinks = memo(() => {
    console.log("mefe")
  return (
    <>
    <CartWidget />
    <Link className='nombreTienda' to='/'>Mefe Pipas</Link>
    <Link className='navLink' to='/categoria/pipas'>Pipas</Link>
    <Link className='navLink' to='/categoria/tabacos'>Tabacos</Link>
    <Link className='navLink' to='/categoria/accesorios'>Accesorios</Link>
    <Link className='navLink' to='/nosotros'>Nosotros</Link>
    </>
  )
});
