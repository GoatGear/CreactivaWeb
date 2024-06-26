import { BrowserRouter, Routes, Route } from 'react-router-dom'

// pages
import Home from './pages/Home';


// components
import Navbar from './components/Navbar';
import Seccion from './components/Seccion';

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
          </Routes>
        </div>
        <Seccion></Seccion>
        <div className='pie'>
          <h4>CreActividad - 2024</h4>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;