// Header.jsx
import React from 'react';
import '../styles/headerStyles.css';
import Logo from './Home/Logo';

const Header = () => {
  return (
    <header className="header">
      <div className="header-logo">Mi Proyecto REACT JS</div>
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