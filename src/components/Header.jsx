// Header.jsx
import React from 'react';
import '../styles/headerStyles.css';
import LogoReact from '../assets/logoReact.svg';

const Header = () => {
  return (
    <header className="header">
      <div className="header-logo"> 
          <a href="/" target="_blank"><img src={LogoReact} className="logo react" alt="React logo" /></a> 
          <span>Mi Proyecto REACT JS</span>
        </div>
      <nav className="header-nav">
        <ul className="header-menu">
          <li className="header-menu-item"><a href="/" className="header-link">Inicio</a></li>
          <li className="header-menu-item"><a href="/about" className="header-link">Acerca de</a></li>
          <li className="header-menu-item"><a href="/contact" className="header-link">Contacto</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;