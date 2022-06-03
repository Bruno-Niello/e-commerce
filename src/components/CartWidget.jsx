import { GiSmokingPipe } from 'react-icons/gi';
import ItemCount from './ItemCount';

const CartWidget = () => {
    return(
        <>
            <div className='icon_pipa'>
                <GiSmokingPipe />
                {/* <p></p> aca deberia imprimirse el carrito */}
            </div>
        </>
    )
}

export default CartWidget;