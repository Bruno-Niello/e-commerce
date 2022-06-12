import CartWidget from './CartWidget';
import { Link } from 'react-router-dom';


export const NavBar = () => {
    return (
    <>
        <nav className='nav'>
            <CartWidget />
            <Link className='nombreTienda' to='/'>Mefe Pipas</Link>
            <Link className='navLink' to='/pipas'>Pipas</Link>
            <Link className='navLink' to='/tabacos'>Tabacos</Link>
            <Link className='navLink' to='/accesorios'>Accesorios</Link>
            <Link className='navLink' to='/bebidas'>Bebidas</Link>
            <Link className='navLink' to='/nosotros'>Nosotros</Link>
        </nav>
    </>
    );
  }
  