import { BrowserRouter, Routes, Route } from 'react-router-dom'

// pages
import Home from './pages/Home';
import Nosotros from './pages/Nosotros';
import Servicios from './pages/Servicios';
import Signup from './pages/Signup';
import Login from './pages/Login';


// components
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar></Navbar>
        <div className='pages'>
          <Routes>
            <Route
              path="/"
              element={ <Home></Home>}
            ></Route>
            <Route
              path="/Nosotros"
              element={ <Nosotros></Nosotros>}
            ></Route>
            <Route
              path="/Servicios"
              element={ <Servicios></Servicios>}
            ></Route>
            <Route
              path="/Entrar"
              element={ <Login></Login>}
            ></Route>
            <Route
              path="/Registro"
              element={ <Signup></Signup>}
            ></Route>
          </Routes>
        </div>
        <div className='pie'>
          <h4>CreActividad - 2024</h4>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;