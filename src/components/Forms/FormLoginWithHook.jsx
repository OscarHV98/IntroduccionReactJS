import React, { useState } from 'react';
import '../../styles/stylesLogin.css';
import { useDispatch, useSelector } from 'react-redux';
import { setFormData, resetFormData } from '../../store/form/formSlice';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { useNavigate } from 'react-router';
import useForm from '../Hooks/useForm';

const FormLoginWithHook = ({ titleForm }) => {

  const navigate = useNavigate();

  const dispatch = useDispatch();
  const { module } = useSelector((state) => state.form);

  const { formData, handleChange, resetForm} = useForm({
    module: module,
    username: '',
    email: '',
    password: '',
});

  const [showPassword, setShowPassword] = useState(false); // Estado para ver/ocultar password
  const [showModal, setShowModal] = useState(false); // Estado para mostrar el modal
  const [modalMessage, setModalMessage] = useState(''); // Mensaje del modal
  const [passMessage, setPassMessage] = useState(''); // Mensaje del modal


  const handleSubmit = (e) => {
    e.preventDefault();
    const { username, email, password } = formData;
    if (password === 'mod7USIP-Oscar-Herbas-Velasco') {
      dispatch(setFormData({ username, email, password }));
      setModalMessage('Datos guardados exitosamente.');
      navigate('/home'); 
      resetForm();
    } else {
      setModalMessage('El password es incorrecto. Intenta de nuevo ingresando esta contraseña:');
      setPassMessage('mod7USIP-Oscar-Herbas-Velasco');
    }

    setShowModal(true); 
  };

  const handleVisibilidadPassword = () => {
    setShowPassword((prev) => !prev);
  };

  return (
    <>
      <form onSubmit={handleSubmit} className="form-content">
        <h3>{titleForm}</h3>

        <div className="input-content">
          <label>
            Module:
            <input
              type="text"
              name="module"
              value={formData.module}
              onChange={handleChange}
              disabled // Campo deshabilitado
            />
          </label>
        </div>

        <div className="input-content">
          <label>
            UserName:
            <input
              type="text"
              name="username"
              value={formData.username}
              onChange={handleChange}
              required
            />
          </label>
        </div>

        <div className="input-content">
          <label>
            Email:
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </label>
        </div>

        <div className="input-content password-field">
          <label>
            Password:
            <div style={{ position: 'relative', display: 'flex', alignItems: 'center' }}>
              <input
                type={showPassword ? 'text' : 'password'}
                name="password"
                value={formData.password}
                onChange={handleChange}
                required
              />
              <span
                style={{
                  position: 'absolute',
                  right: '10px',
                  cursor: 'pointer',
                  color: '#555',
                }}
                onClick={handleVisibilidadPassword}
              >
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </span>
            </div>
          </label>
        </div>

        <button type="submit">Login</button>
      </form>

      {/* Modal Info*/}
      {showModal && (
        <div className="modal-overlay">
            <div className="modal-content">
                <p>{modalMessage}</p>
                <h4>{passMessage}</h4>
                <button onClick={() => setShowModal(false)}>Cerrar</button>
            </div>
        </div>
      )}
    </>
  );
};

export default FormLoginWithHook;
