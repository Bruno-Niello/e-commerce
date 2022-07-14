import React from 'react'
import { Footer } from './Footer';
import ItemListContainer from './ItemListContainer';

export const Home = () => {
  return (
    <div className="home">
      <ItemListContainer />
      <Footer/>
    </div>
  )
}
