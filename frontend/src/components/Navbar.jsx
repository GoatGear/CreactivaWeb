import React from 'react'

import '../styles/styles.css';

const Navbar = () => {
  return (
    <div className='navbar'>
      <h1>Creactiva</h1>
      <div className='secciones'>
        <h4 className='txt'>Nosotros</h4>
        <h4 className='txt'>Servicios</h4>
        <button className='login'>Entrar</button>
        <button className='signup'>Registrarme</button>
      </div>
    </div>
  )
}

export default Navbar
