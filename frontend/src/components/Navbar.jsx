import React from 'react'
import { Link } from 'react-router-dom';
import '../styles/styles.css';

const Navbar = () => {
  return (
    <div className='navbar'>
      <Link to="/"><h1>CreActividad</h1></Link>
      <div className='secciones'>
        <Link to="/Nosotros"><h4 className='txt'>Nosotros</h4></Link>
        <Link to="/Servicios"><h4 className='txt'>Servicios</h4></Link>
        <Link to="/Entrar"><button className='login'>Entrar</button></Link>
        <Link to="/Registro"><button className='signup'>Registrarme</button></Link>
      </div>
    </div>
  )
}

export default Navbar
