import CartWidget from './CartWidget';
import {Link} from 'react-router-dom';
import { useState, useEffect, memo } from 'react';
import { collection, getDocs, getFirestore } from 'firebase/firestore';

export const NavBarLinks = memo(() => {

  const [categoria, setCategoria] = useState([])

  useEffect(() => {
    const db = getFirestore();
    const categoriesCollection = collection(db, 'categorias');

    getDocs(categoriesCollection).then((snapshot) => {
        setCategoria(snapshot.docs.map((doc) => doc.data().categoria)) 
    });

  }, []);
  return (
    <>
    <CartWidget />
    <Link className='nombreTienda' to='/'>Mefe Pipas</Link>
    <div className='navLinks'>
      {categoria.map((element) => (
        <Link to={'/categoria/' + element} className="navLink">{element}</Link>
      ))}
      <Link className='navLink' to='/nosotros'>Nosotros</Link>
    </div>
    </>
  )
});
