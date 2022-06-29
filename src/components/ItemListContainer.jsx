import { useEffect, useState } from 'react';
import { ItemList } from './ItemList';
import { Loader } from './Loader';
import { collection, getDocs, getFirestore } from 'firebase/firestore'

export default function ItemListContainer() {

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [item, setItem] = useState([]); 

  // useEffect(()=>{
  //   detalles
  //     .then((result)=>{
  //       setItem(result);
  //       setLoading(false);
  //     })
  //     .catch(error =>{
  //       setError(true);
  //       setLoading(false);
  //       console.error("Error:", error)
  //     })
  //     .finally(()=>{
  //       setLoading(false);
  //     })
  // }, [])

  useEffect(()=>{

    const db = getFirestore();
    const itemsCollection = collection(db, 'items');

    getDocs(itemsCollection)
      .then(items => {
        setItem(items.docs.map((doc)=> ({...doc.data(), id: doc.id})))
      })
      .catch(error => {
        setError(true);
        setLoading(false);
        console.error("error", error)
      })
      .finally(()=>{setLoading(false)})

  }, [])

  return (
  <> 
    <div className='container-shop'>
      <Loader loading={loading}/>
      <ItemList items={item}/>
      <p className='error'>{error && 'Hubo un fallo en la página'}</p>
    </div>
    <br></br>
    <hr></hr>
    
  </>
  )
}

