import '../styles/NavBar.css';
import CartWidget from './CartWidget';

const NavBar = () => {
    return (
    <>
        <nav class="nav">
            <CartWidget />
            <p class="nombreTienda">Mefe Pipas</p>
            <a class="navLink" href="#">Home</a>
            <a class="navLink" href="#">Pipas</a>
            <a class="navLink" href="#">Tabaco</a>
            <a class="navLink" href="#">Nosotros</a>
        </nav>
    </>
    );
  }
  
  export default NavBar;