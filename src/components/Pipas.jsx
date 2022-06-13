import React from 'react'
import {useEffect, useState} from 'react';
import {ItemList} from './ItemList';
import {detalles} from '../productos';

export const Pipas = () => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [item, setItem] = useState([]); 

  useEffect(()=>{
    detalles
      .then((result)=>{
        setItem(result.filter(item => item.categoria == "pipas"));
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
      <h1 className='pipas'>Pipas:</h1>
      <ItemList items={item}/>
    </div>
    <br></br>
    <hr></hr>
    
  </>
  )
}
