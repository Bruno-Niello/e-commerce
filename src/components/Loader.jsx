import React from 'react'
import loader from '../media/loader.png'

export const Loader = ({loading}) => {



  return (
    <>
    <p>{loading && <div className='loader-contenedor'><img className='loader' src={loader}></img></div>}</p>
    </>
  )
}
