import { useEffect, useState } from 'react';
import { ItemDetail } from './ItemDetail';
import { useParams } from 'react-router-dom';
import { Loader } from './Loader';
import { getDoc, getFirestore, doc } from 'firebase/firestore';
import {Footer} from './Footer';

export default function ItemDetailContainer() {

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [detalle, setDetalle] = useState({});
  const { id } = useParams(); 

  useEffect(()=>{

    const db = getFirestore();
  
    const itemsCollection = doc(db, 'items', id);

    getDoc(itemsCollection)
      .then((items) => {
        setDetalle({...items.data(), id: items.id})
        console.log(detalle)
      })
      .catch(error => {
        setError(true);
        setLoading(false);
        console.error("error", error)
      })
      .finally(()=>{setLoading(false)})

  }, [id])
    
  return (
    <> 
    <div className='container-shop'>
        <Loader loading={loading}/>
        <p className='error'>{error && 'Hubo un fallo en la página'}</p>
        {detalle && <ItemDetail detalle={detalle}/>}
    </div>
    <Footer/>   
    </>
    )
}
