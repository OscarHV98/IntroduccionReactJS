import React from 'react';
import LogoReact from '../../assets/logoReact.svg';
import { Link } from 'react-router';
import '../../styles/stylesHeader.css';

const Navigator = () => {
  return (
    <header className="header">
      <div className="header-logo"> 
        <Link to="/"><img src={LogoReact} className="logo react" alt="React logo" /></Link>
        <span>Mi Proyecto REACT JS</span>
      </div>
      <nav className="header-nav">
        <Link to="/" className="header-link">Inicio</Link>
        <Link to="/counter" className="header-link">Contador</Link>
        <Link to="/product" className="header-link">Productos</Link>  
        <Link to="/about" className="header-link">About</Link>  
        <Link to="/think" className="header-link">Think</Link>  
        <Link to="/login" className="header-link">Login</Link>  
      </nav>
    </header>
  );
};

export default Navigator;