import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import AllProducts from '../features/allProducts/AllProducts';
import { fetchAllProducts } from '../features/allProducts/allProductsSlice';
import AuthForm from '../features/auth/AuthForm';
import Home from '../features/home/Home';
import Register from '../features/auth/Register';
import Login from '../features/auth/Login';
import { me } from './store';

/**
 * COMPONENT
 */

const AppRoutes = () => {
  const isLoggedIn = useSelector((state) => !!state.auth.me.id);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(me())
  }, []);

  return (
    <div>
      {isLoggedIn ? (
        <Routes>
          <Route path="/" element={<Home />} />
          <Route to="/home" element={<Home />} />
          <Route path="/products" element={<AllProducts />} />
        </Routes>
         ) : (
         <Routes>
           <Route path="/login" element={<Login />} />
           <Route path="/signup" element={<Register />} />
         </Routes>
       )}
    </div>
  );
};

export default AppRoutes;
