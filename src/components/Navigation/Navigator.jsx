import React, { useState } from 'react';
import LogoReact from '../../assets/logoReact.svg';
import { Link, useNavigate } from 'react-router';
import '../../styles/stylesHeader.css';
import { useDispatch, useSelector } from 'react-redux';
import { resetFormData } from '../../store/form/formSlice';

const Navigator = () => {

  const navigate = useNavigate();

  const [showModal, setShowModal] = useState(false);
  const dispatch = useDispatch();

  // Obtener datos del usuario
  const { username, email } = useSelector((state) => state.form);

  // Cerrar Sesion
  const handleLogout = () => {
    dispatch(resetFormData());
    setShowModal(false);
    navigate('/')
  };

  return (
    <header className="header">
      <div className="header-logo">
        <Link to="/"><img src={LogoReact} className="logo react" alt="React logo" /></Link>
        <span>Mi Proyecto REACT JS</span>
      </div>
      <nav className="header-nav">
   
      {username && email ? (
                <>
                <Link to="/" className="header-link">LandingPage</Link>
                <Link to="/home" className="header-link">Home</Link>
                <Link to="/counter" className="header-link">Contador</Link>
                <Link to="/product" className="header-link">Productos</Link>
                <Link to="/about" className="header-link">About</Link>
                <Link to="/think" className="header-link">Think</Link>
                </>
      ): (
       <>
        <Link to="/" className="header-link">LandingPage</Link>
        <Link to="/login" className="header-link login-button">Login</Link>
       </>
      )}

      {/* Informacion Usuario - Sesion Iniciada */}
      {username && email && (
        <div className="user-info">
          <span>{username}</span>
          <span>({email})</span>
        </div>
      )}

      {/* Botón de Logout */}
      {username && (
        <button
          className="logout-button"
          onClick={() => setShowModal(true)}>
          Logout
        </button>
      )}
      </nav>


      {/* Modal de Logout */}
      {showModal && (
        <div className="modal-overlay">
          <div className="modal-content">
            <h3>¿Seguro que deseas salir?</h3>
            <div className='button-modal'>
              <button onClick={handleLogout} className="modal-confirm-button">
                Cerrar Sesión
              </button>
              <button onClick={() => setShowModal(false)} className="modal-cancel-button">
                cancelar
              </button>
            </div>
          </div>
        </div>
      )}

    </header>
  );
};

export default Navigator;