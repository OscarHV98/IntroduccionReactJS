import React from 'react';
import { useSelector } from 'react-redux';
import { useState } from 'react';

const About = () => {
    //hooks useState, useSelector, useEffect, useContext, useRef, useTransition.
    //es posible crear nuestros propios hooks: useServices, useForm, useImage.

    const { initialValue} = useSelector((state) => state.product);
    const [nameComponent, setnameComponent] = useState("About Component");
    return (
        <>
            <h1>Componente About</h1>
            <h2>{initialValue}</h2>
            
            <p>Component name: {nameComponent}</p>
            <button onClick={()=> setnameComponent('Curso en React')}>
                Cambiar valor
            </button>
        </>
    );
}

export default About;
