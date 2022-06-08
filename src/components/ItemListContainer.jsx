import { useEffect, useState } from 'react';
import { ItemList } from './ItemList';
import imgbc01 from '../media/pipa-bc01.jpg';
import imgsa01 from '../media/pipa-sa01.jpg';
import imgpe01 from '../media/pipa-pe01.jpg';

const pipas = [
  {id: 1, stock: 3, name:"Butz Choquin", model:"Cobra", description:'Brezo | 15,5cm | Francesa | Curva', price:'$18,400', img: imgbc01},
  {id: 2, stock: 4, name:"Savinelli", model:"Ontario", description:'Brezo | 16cm | Italiana | Recta', price:'$23,700', img: imgsa01},
  {id: 3, stock: 7, name:"Peterson", model:"Churchwarden Ebony", description:'Brezo | 27cm | Irlandesa | Lectura', price:'$35,900', img: imgpe01}
]


export default function Listado() {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [item, setItem] = useState([]); 

  useEffect(()=>{

    const llegara = new Promise((res, rej)=>{

      setTimeout(()=>{
        res(pipas);
        rej('hubo un problema')
      }, 3000);
    })

    llegara
      .then((result)=>{
        setItem(result);
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
  }, [])

  console.log(item)

  return (
  <> 
    <div className='container-shop'>
      <p className='loading'>{loading && 'Loading...'}</p>
      <p className='error'>{error && 'Hubo un fallo en la página'}</p>
      <ItemList items={item}/>
    </div>
    <br></br>
    <hr></hr>
    
  </>
  )
}

