import {collection, getFirestore, getDocs} from 'firebase/firestore';
import {useState} from 'react';

const db = getFirestore();
const itemsCollection = collection(db, 'items');
const [item, setItem] = useState([]); 

export const dataBase = () => {

    setTimeout(()=>{
        getDocs(itemsCollection)
            .then(snapshot => {
            let productos = [];
            snapshot.docs.forEach((doc)=> {productos.push({...doc.data(), id: doc.id})})
            setItem(productos)
            })
            .catch(error => {
            console.error("error", error)
            })
    }, 2000)
    

}
