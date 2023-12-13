//import logo from './logo.svg';//
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavBar } from "./componentes/NavBar";
import 'bootstrap/dist/css/bootstrap.min.css'
//import { Banner } from './componentes/Banner';
//import { Skills } from './componentes/Skills';

import { BrowserRouter, Link } from 'react-router-dom'; 
import { BrowserRouter as Router, Route, Switch, Routes } from 'react-router-dom';//
import JugadoresPage from './paginas/JugadoresPage';
import Inicio from "./paginas/Inicio";
import JugadoresDestacados from './paginas/JugadoresDestacados';
import Noticias from './paginas/Noticias';
import Tienda from './paginas/Tienda';
import Historia from './paginas/Historia';
import Galeria from './paginas/Galeria';
import Formulario from './paginas/Formulario';
import Contactos from './paginas/Contactos';
import Creditos from './paginas/Creditos';



function App() {
  return (
    
      <div className="App">
        <Router>
          <NavBar />
          
          <Routes>
            <Route path='/' element={<Inicio />}></Route>
            <Route path='/jugadorespage' element={<JugadoresPage />}></Route>
            <Route path='/jugadores' element={<JugadoresDestacados />}></Route>
            <Route path='/noticia' element={<Noticias />}></Route>
            <Route path='/tienda' element={<Tienda />}></Route>
            <Route path='/historia' element={<Historia />}></Route>
            <Route path='/galeria' element={<Galeria />}></Route>
            <Route path='/formulario' element={<Formulario />}></Route>
            <Route path='/contacto' element={<Contactos />}></Route>
            <Route path='/creditos' element={<Creditos />}></Route>
          </Routes>
        </Router>
        
      </div>
    
    
  );
}

export default App;
