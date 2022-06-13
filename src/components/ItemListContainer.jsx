import { useEffect, useState } from 'react';
import { ItemList } from './ItemList';
import { detalles } from '../productos';

export default function ItemListContainer() {

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [item, setItem] = useState([]); 

  useEffect(()=>{
    detalles
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

