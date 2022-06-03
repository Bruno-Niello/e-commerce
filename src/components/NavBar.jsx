import CartWidget from './CartWidget';

const NavBar = () => {
    return (
    <>
        <nav className='nav'>
            <CartWidget />
            <p className='nombreTienda'>Mefe Pipas</p>
            <a className='navLink' href="#">Home</a>
            <a className='navLink' href="#">Pipas</a>
            <a className='navLink' href="#">Tabaco</a>
            <a className='navLink' href="#">Nosotros</a>
        </nav>
    </>
    );
  }
  
  export default NavBar;