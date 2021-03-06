import { useContext, useState } from 'react';
import { Contexto } from '../context/CartContext';
import { collection, getFirestore, addDoc } from 'firebase/firestore'
import { Link } from 'react-router-dom';
import { Footer } from './Footer';

export const Checkout = () => {
    const [formulario, setFormulario] = useState({});
    const [idCompra, setIdCompra] = useState();
    const [compraFinalizada, setCompraFinalizada] = useState(false);

    const { carrito, precioTotal, vaciar } = useContext(Contexto);

    const db = getFirestore();
    const ordenColeccion = collection(db, 'ordenes')

    const handleClick = (e) => {
        
        const orden = {
            comprador: formulario,
            productos: carrito,
            total: precioTotal()
        }
        addDoc(ordenColeccion, orden).then(({id})=>{
            setIdCompra(id)
        }).finally(setCompraFinalizada(true))

        e.preventDefault();
    }

    const handleChange = (e) => {
        setFormulario({...formulario, [e.target.name]:e.target.value})
    }

    

    if(compraFinalizada == true){
        return(
            <>
            <div className='checkout-container'>
                <div className='compraTerminada'>
                    <h2 className='name'>Gracias por tu reserva {formulario.nombre}!!</h2>
                    <h4 className='name'>Tu id de reserva es: {idCompra}</h4>
                    <h5 className='name'>Te llegara un correo electronico con las instrucciones de pago</h5>
                    <Link className='boton' to="../" onClick={()=>vaciar()}>Regresar a la tienda</Link>
                </div>
            </div>
            <Footer/>
            </>
        )

    }else{
        return (
            <>
            <div className='checkout-container'>
                <form className='formulario' onSubmit={handleClick}>
                    <h2 className='form-reserva'>Complete los datos para finalizar la reserva</h2>
                    <input name="nombre" className='formuInput' placeholder='ingrese su nombre' type="text" onChange={handleChange} required/>
                    <input name="mail" className='formuInput' placeholder='ingrese su email' type="email" onChange={handleChange} required/>
                    <input name="cel" className='formuInput' placeholder='ingrese su celular' type="tel" onChange={handleChange} required/>
                    <input type="submit" value="Enviar" className="formBoton"/>
                </form>
            </div>
            <Footer/>
            </>
          )
    }
}
