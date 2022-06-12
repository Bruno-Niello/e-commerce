import React from 'react'
import {useEffect, useState} from 'react';
import {ItemDetail} from './ItemDetail';
import imgbc01 from '../media/pipa-bc01.jpg';
import imgsa01 from '../media/pipa-sa01.jpg';
import imgpe01 from '../media/pipa-pe01.jpg';

const detalleProductos = [
    {id: 1, stock: 3, name:"Butz Choquin", model:"Cobra", description:'Brezo | 15,5cm | Francesa | Curva', price:'$18,400', img: imgbc01, detail:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras congue maximus fermentum. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Quisque semper odio et sollicitudin interdum. Sed sit amet nibh magna. Morbi sollicitudin vitae nisi aliquet sollicitudin. Etiam bibendum mauris nisl, et eleifend mauris commodo id. Ut placerat tincidunt ante, in porttitor tortor suscipit vel. Sed in tortor vel sapien bibendum dapibus in vitae dolor. Sed eu elit molestie, condimentum massa ac, lacinia lacus. Vivamus sagittis hendrerit felis eu congue. Proin orci ante, bibendum at pellentesque id, molestie sed turpis. Maecenas nec aliquet nisi, nec dapibus nisl.'},
    {id: 2, stock: 4, name:"Savinelli", model:"Ontario", description:'Brezo | 16cm | Italiana | Recta', price:'$23,700', img: imgsa01, detail:'Morbi at blandit ante. Pellentesque non sapien eu nisi interdum vestibulum vel vel eros. Etiam sagittis magna est, vitae fermentum est consequat in. Nulla eget lacinia nibh, iaculis malesuada lectus. Aenean ornare dui ante. Etiam augue sem, consequat vel magna non, molestie efficitur risus. Fusce sed ipsum eu libero lacinia ullamcorper. Maecenas cursus quam nec vulputate tincidunt. Nam posuere diam in tellus sollicitudin luctus at a ante. Morbi congue eu libero at scelerisque. Nulla cursus metus ac porttitor dapibus. Sed gravida nunc vitae justo molestie euismod.'},
    {id: 3, stock: 7, name:"Peterson", model:"Churchwarden Ebony", description:'Brezo | 27cm | Irlandesa | Lectura', price:'$35,900', img: imgpe01, detail:'Nullam vitae ex est. Morbi metus mi, bibendum eu neque euismod, fringilla ultricies urna. Sed id quam vel elit dapibus tincidunt. Morbi nisl mi, porta et lorem eu, pulvinar aliquam libero. Nulla nunc felis, fermentum vel suscipit dictum, rutrum consequat magna. Integer fermentum orci vel justo tempor venenatis. Fusce et orci nec elit fermentum sagittis. Suspendisse finibus enim porta leo euismod dictum. Nulla massa tortor, auctor et cursus sed, consequat quis metus.'}
  ]

export const ItemDetailContainer = () => {

        const [loading, setLoading] = useState(true);
        const [error, setError] = useState(false);
        const [detalle, setDetalle] = useState([]); 
      
        useEffect(()=>{
      
          const detalles = new Promise((res, rej)=>{
      
            setTimeout(()=>{
              res(detalleProductos);
              rej('hubo un problema')
            }, 2000);
          })
      
          detalles
            .then((result)=>{
              setDetalle(result);
              setLoading(false);
            })
            .catch(error =>{
              setError(true);
              setLoading(false);
              console.error("Error:", error)
            })
            .finally(()=>{
              setLoading(false);
            })

            console.log(detalles)
        }, [])
      
      
    


      return (
        <> 
        <div className='container-shop'>
            <p className='loading'>{loading && 'Loading...'}</p>
            <p className='error'>{error && 'Hubo un fallo en la página'}</p>
            <ItemDetail detalle={detalle}/>
        </div>
        <br></br>
        <hr></hr>
          
        </>
        )
}
