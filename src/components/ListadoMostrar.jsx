import React from 'react'

export const ListadoMostrar = ({padel}) => {
  return (
    <>
    {padel.map(item=> <p class="miembros_nombres">{item}</p>)}
    </>
  )
}
