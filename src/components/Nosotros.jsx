import React from 'react'
import {Footer} from './Footer';
import perfil from '../media/perfil.jpg';


export const Nosotros = () => {
  return (
    <>
      <section className="home_contacto">
        <h1 className='contacto-titulo'>Contacto profesional:</h1>
        <div className='contacto'>
          <img src={perfil} className="perfil"/> 
          <div className="datos">
              <ul className="datos_lista">
                  <li className="dato"><a href="mailto:brunoniello@gmail.com"><img src="https://img.icons8.com/external-justicon-lineal-justicon/64/000000/external-gmail-social-media-justicon-lineal-justicon.png"/></a></li>
                  <li className="dato"><a href="https://www.linkedin.com/in/bruno-niello-7b09051a4/"><img src="https://img.icons8.com/external-justicon-lineal-justicon/64/000000/external-linkedin-social-media-justicon-lineal-justicon.png"/></a></li>
                  <li className="dato"><a href="https://github.com/Bruno-Niello"><img src="https://img.icons8.com/dotty/80/000000/github.png"/></a></li>
              </ul>
          </div>
        </div>
      </section>
      <Footer/>
    </>
  )
}
