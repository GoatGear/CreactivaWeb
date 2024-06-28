import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className="bg-white flex items-center justify-between px-24 py-4 shadow-md">
      <Link to="/">
        <h1 className="text-2xl font-bold text-gray-800 hover:text-purple-700 transition duration-300">CreActividad</h1>
      </Link>
      <div className="flex items-center space-x-8">
        <Link to="/Nosotros">
          <h4 className="text-gray-800 cursor-pointer hover:text-indigo-600 transition duration-300">Nosotros</h4>
        </Link>
        <Link to="/Servicios">
          <h4 className="text-gray-800 cursor-pointer hover:text-indigo-600 transition duration-300">Servicios</h4>
        </Link>
        <Link to="/Entrar">
          <button className="bg-green-500 text-gray-800 font-semibold py-2 px-4 rounded shadow-md hover:bg-gray-200 hover:text-green-500 transition duration-300">Entrar</button>
        </Link>
        <Link to="/Registro">
          <button className="bg-white text-purple-700 border border-black font-semibold py-2 px-4 rounded shadow-md hover:bg-gray-800 hover:text-white transition duration-300">Registrarme</button>
        </Link>
      </div>
    </div>
  );
}

export default Navbar;

