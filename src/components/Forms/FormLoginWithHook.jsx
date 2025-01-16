import React from 'react';
import '../../styles/stylesLogin.css';
import useForm from '../Hooks/useForm';

const FormLoginWithHook = ({ titleForm }) => {
    
    const { formData, handleChange, resetForm } = useForm({
        username: '',
        email: '',
    });

    // const [ formData, handleChange, resetForm ] = useForm({
    //     username: '',
    //     email: '',
    // });

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log('Datos del formulario: ', formData);
        resetForm();
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

export default FormLoginWithHook;
