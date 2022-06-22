import React from 'react'

export const Loader = ({loading}) => {



  return (
    <>
    <p>{loading && <div className='lds-facebook'><div></div><div></div><div></div></div>}</p>
    </>
  )
}
