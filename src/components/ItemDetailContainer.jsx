import React from 'react'
import { useEffect, useState } from 'react';
import { ItemDetail } from './ItemDetail';
import { detalles } from '../productos';
import { useParams } from 'react-router-dom';

export default function ItemDetailContainer() {

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [detalle, setDetalle] = useState({});
  const { id } = useParams(); 

  useEffect(()=>{
    detalles
      .then((result)=>{
        setDetalle(result.find(item => item.id == id));
        setLoading(false);
      })
      .then(
        console.log(detalle)
      )
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
        {detalle && <ItemDetail detalle={detalle}/>}
    </div>   
    </>
    )
}
