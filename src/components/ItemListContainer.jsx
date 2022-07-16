import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { ItemList } from './ItemList';
import { Loader } from './Loader';
import { collection, getDocs, getFirestore, query, where } from 'firebase/firestore';
import {Footer} from './Footer';


export default function ItemListContainer() {

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [item, setItem] = useState([]); 


  const { id } = useParams(); 

    useEffect(() => {
        const db = getFirestore();
        const productsCollection = collection(db, 'items');

        if (id) {
          const q = query(productsCollection, where("categoria", "==", id)) 
          getDocs(q)
              .then((snapshot) => {
                  setItem(snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }))); 
                  setLoading(false);
              })
              .catch((error) => {
                  setError(error)
                  setLoading(false);
              })
              .finally(() => {
                  setLoading(false)
              });
        } else {
          getDocs(productsCollection)
            .then((snapshot) => {
                setItem(snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
                setLoading(false); 
            })
            .catch((error) => {
                setError(error);
                setLoading(false);
            })
            .finally(() => {
                setLoading(false);
            });
        }


  }, [id])
 
  return (
  <> 
    <div className='container-shop'>
      <Loader loading={loading}/>
      <ItemList items={item} key={item.id}/>
      <p className='error'>{error && 'Hubo un fallo en la página'}</p>
    </div>
    <Footer/>
  </>
  )
}

