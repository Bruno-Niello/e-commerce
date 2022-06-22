import { useEffect, useState } from 'react';
import { ItemList } from './ItemList';
import { detalles } from '../productos';
import { Loader } from './Loader';

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
      <Loader loading={loading}/>
      <ItemList items={item}/>
    </div>
    <br></br>
    <hr></hr>
    
  </>
  )
}

