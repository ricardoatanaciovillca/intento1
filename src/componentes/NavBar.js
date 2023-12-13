import { useState, useEffect } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import logo from '../assets/img/logo.png';
//import navIcon1 from '../assets/img/nav-icon1.svg';
//import navIcon2 from '../assets/img/nav-icon2.svg';
//import navIcon3 from '../assets/img/nav-icon3.svg';
//import { HashLink } from 'react-router-hash-link';//
//import {BrowserRouter as Router} from "react-router-dom";//
import { Link } from "react-router-dom"


export const NavBar = () => {
  
  const [activeLink, setActiveLink] = useState('home');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    }

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, [])

  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  }
  

  return (
    
      <Navbar expand="md" className={scrolled ? "scrolled" : ""}>
        <Container>
          <Navbar.Brand href="/">
          <img src={logo} alt="Logo" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav">
            <span className="navbar-toggler-icon"></span>
          </Navbar.Toggle>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Link to="/" className="Link" onClick={() => onUpdateActiveLink('home')}>Inicio</Link>
              <Link to="/jugadorespage" className="Link"  onClick={() => onUpdateActiveLink('jugadorespage')}>Equipos</Link>
              <Link to="/jugadores" className="Link" onClick={() => onUpdateActiveLink('jugadores')}>Jugadores Dest</Link>
              <Link to="/noticia" className="Link" onClick={() => onUpdateActiveLink('noticias')}>Noticia</Link>
              <Link to="/tienda" className="Link" onClick={() => onUpdateActiveLink('tienda')}>Tienda</Link>
              <Link to="/historia" className="Link" onClick={() => onUpdateActiveLink('historia')}>Historia</Link>
              <Link to="/galeria" className="Link" onClick={() => onUpdateActiveLink('galeria')}>Galeria</Link>
              <Link to="/formulario" className="Link" onClick={() => onUpdateActiveLink('formulario')}>Estadistica de Futbol</Link>
              <Link to="/contacto" className="Link" onClick={() => onUpdateActiveLink('contacto')}>Contactos</Link>
              <Link to="/creditos" className="Link" onClick={() => onUpdateActiveLink('creditos')}>Creditos</Link>
            </Nav>
            
          </Navbar.Collapse>
        </Container>
      </Navbar>
    
      
  )
}