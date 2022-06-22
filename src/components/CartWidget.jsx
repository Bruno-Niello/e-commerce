//@ts-check
import { useContext } from 'react';
import { GiSmokingPipe } from 'react-icons/gi';
import { Contexto } from '../context/CartContext';


const CartWidget = () => {

    const { cantidadTotal } = useContext(Contexto);

    
    
    return(
        <>
            <div className='icon_pipa'>
                <GiSmokingPipe />
            </div>
            <p>{cantidadTotal()}</p>
        </>
    )
}

export default CartWidget;