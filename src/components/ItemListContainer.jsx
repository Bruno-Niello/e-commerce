import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { ItemList } from './ItemList';
import { Loader } from './Loader';
import { collection, doc, getDocs, getFirestore, get, query, where } from 'firebase/firestore';
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

  // useEffect(()=>{

    // const firestoreData = async () => {
      // const db = getFirestore();
      // const itemsCollection = collection(db, 'items');
    //   const allItems = await itemsCollection;
    //   console.log(allItems.docs)
    // }    
    // firestoreData().catch(console.error)

    // const docs = await getDocs(itemsCollection)

  //   setTimeout(()=>{
  //     getDocs(itemsCollection)
  //     .then(snapshot => {
  //       let productos = [];
  //       snapshot.docs.forEach((doc)=> {productos.push({...doc.data(), id: doc.id})})
  //       setItem(productos)
  //       console.log(item)
  //     })
  //     .catch(error => {
  //       setError(true);
  //       setLoading(false);
  //       console.error("error", error)
  //     })
  //     .finally(()=>{setLoading(false)})
  //   }, 2000)

  // }, [])

  return (
  <> 
    <div className='container-shop'>
      <Loader loading={loading}/>
      <ItemList items={item}/>
      <p className='error'>{error && 'Hubo un fallo en la página'}</p>
    </div>
    <Footer/>
  </>
  )
}

