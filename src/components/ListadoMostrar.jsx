import React from 'react';

export const ListadoMostrar = ({padel}) => {
  return (
    <>
      {padel.map(item=> <p className='miembros_nombres'>{item}</p>)}
    </>
  )
}
