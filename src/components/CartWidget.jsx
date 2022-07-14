//@ts-check
import { useContext } from 'react';
import { GiSmokingPipe } from 'react-icons/gi';
import { Contexto } from '../context/CartContext';
import {Link} from 'react-router-dom';


const CartWidget = () => {

    const { cantidadTotal } = useContext(Contexto);

    
    
    return(
        <>
            <Link to='/carrito'>
                <div className='icon_pipa'>
                    <GiSmokingPipe />
                </div>
            </Link>
            <p className='numero-carro'>{cantidadTotal()}</p>
        </>
    )
}

export default CartWidget;