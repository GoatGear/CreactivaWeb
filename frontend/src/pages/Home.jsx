import React from 'react';

const Home = () => {
  return (
    <>
      <div className="flex items-center justify-between bg-gray-200 h-64 px-24">
        <div>
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Proyectos y desarrollo de software</h1>
          <h3 className="text-xl text-gray-600 mb-8">DevWeb, UX/UI Design, Audiovisual y más...</h3>
          <div className="flex space-x-4">
            <button className="bg-green-500 text-gray-800 font-semibold py-2 px-6 rounded shadow-md hover:bg-gray-200 hover:text-green-500 transition duration-300">Portafolio</button>
            <button className="bg-white text-purple-700 border border-black font-semibold py-2 px-6 rounded shadow-md hover:bg-gray-800 hover:text-white transition duration-300">Contactar</button>
          </div>
        </div>
      </div>
      <div className="flex justify-evenly items-center h-96 px-24 bg-gray-100">
        <div className="flex items-center justify-center bg-white w-72 h-72 text-gray-800 border border-black rounded-lg shadow-md">Servicio 1</div>
        <div className="flex items-center justify-center bg-white w-72 h-72 text-gray-800 border border-black rounded-lg shadow-md">Servicio 2</div>
        <div className="flex items-center justify-center bg-white w-72 h-72 text-gray-800 border border-black rounded-lg shadow-md">Servicio 3</div>
      </div>
    </>
  )
}

export default Home;
