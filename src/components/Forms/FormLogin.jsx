import React, { useState } from 'react';
import '../../styles/stylesLogin.css';

const FormLogin = ({ titleForm }) => {

    const [formData, setFormData] = useState({
        username: '',
        email: '',
    });

    const handleChange = (event) => {

        const { name, value } = event.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };
    const handleSubmit = (event) => {
                // debugger;
        event.preventDefault();
        console.log('Datos del formulario: ', formData);
    };

    return (
        <>
            <form onSubmit={handleSubmit} className='form-content'>
                <h3>{titleForm}</h3>
                <div className='input-content'>
                    <label>
                        UserName:
                        <input
                            type='text'
                            name='username'
                            value={formData.username}
                            onChange={handleChange}
                            required
                        />
                    </label>
                </div>
                <div className='input-content'>
                    <label>
                        Email:
                        <input
                            type='email'
                            name='email'
                            value={formData.email}
                            onChange={handleChange}
                            required
                        />
                    </label>
                </div>
                <button type='submit' >Iniciar Sesión</button>
            </form>
        </>
    );
}

export default FormLogin;
