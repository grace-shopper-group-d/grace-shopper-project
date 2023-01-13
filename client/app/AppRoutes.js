import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import AllProducts from '../features/allProducts/AllProducts';
import SingleProduct from '../features/singleproduct/singleProduct'
import { fetchAllProducts } from '../features/allProducts/allProductsSlice';
import AllUsers from '../features/allUsers/AllUsers';
import Home from '../features/home/Home';
import Register from '../features/auth/Register';
import Login from '../features/auth/Login';
import { me } from './store';
import Checkout from '../features/checkout/Checkout';
import Cart from '../features/cart/cart';
import SingleUser from '../features/singleuser/singleUser';
import userSlice from '../features/user/userSlice';

/**
 * COMPONENT
 */

const AppRoutes = () => {
  const isLoggedIn = useSelector((state) => !!state.auth.me.id);
  const isAdmin = useSelector((state) => state.auth.me.isAdmin);
  // const isLoggedIn = true
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(me())
  }, []);

  return (
    <div>
      {isLoggedIn && isAdmin ? (
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/products" element={<AllProducts />} />
          <Route path="/products/:productId" element={<SingleProduct/>} />
          <Route path="/users" element={<AllUsers />} />
          <Route path="/users/:userId" element={<SingleUser/>}/>
        </Routes>
        ) : isLoggedIn ? (
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/login" element={<Login name="login" />} />
          <Route path="/products" element={<AllProducts />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element= {<Checkout />} />
        </Routes>
      ): (
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/login" element={<Login name="login" />} />
          <Route path="/products" element={<AllProducts />} />
          <Route path="/products/:productId" element={<SingleProduct/>} />
          <Route path="/signup" element={<Register name="signup"/>} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/products/:productId" element={<SingleProduct/>} />
        </Routes>
      )}
    </div>
  );
};

export default AppRoutes;
