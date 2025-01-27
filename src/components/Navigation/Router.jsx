import React from 'react';
import { Routes, Route } from "react-router";
import Home from '../../screens/Home';
import { Counter } from '../Counter/Counter';
import { Product } from '../../screens/Product';
import About from '../../screens/About';
import Think from '../../screens/Think';
import Login from '../../screens/Login';
import LandingPage from '../../screens/LandingPage';


const Router = () => {
    return (
        <>
            <Routes>
                <Route index path="/home" element={<Home />} />
                <Route path="/counter" element={<Counter />} />
                <Route path="/product" element={<Product />} />
                <Route path="/about" element={<About />} />
                <Route path="/think" element={<Think />} />
                <Route path="/login" element={<Login />} />
                <Route path="/" element={<LandingPage />} />
            </Routes>
        </>
    );
}

export default Router;
