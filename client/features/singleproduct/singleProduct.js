import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom'
import { addCartAsync } from '../cart/cartSlice';
import { fetchProduct, singleProduct } from './singleProductSlice';
import {auth } from '../auth/authSlice'



const SingleProduct = () => {
    const { productId } = useParams();
    const product = useSelector(singleProduct);
    const userId = useSelector((state) => state.auth.me.id);



    const dispatch = useDispatch();

    const handleAddToCart = (userId, productId) => {
        let newCart = {
            userId: userId,
            productId: productId,
            cartQuantity: 1,
        }
        dispatch(addCartAsync(newCart))
    }

   const handleAddtoCartGuest = () => {
    let currentCart = window.localStorage.getItem('cart');
    currentCart = JSON.parse(currentCart)
    if (currentCart !== []) {
        let newEmptyCart = [];
        window.localStorage.setItem('cart', JSON.stringify(newEmptyCart))
    }
    let cartItem = {
        description: product.description,
        id: product.id,
        imageUrl: product.imageUrl,
        name: product.name,
        price: product.price,
        quantity: product.quantity,
        cartQuantity: 1,
    }
       let cart = window.localStorage.getItem('cart');
       cart = JSON.parse(cart)
       console.log("current Cart", cart)
       cart.push(cartItem);
       console.log('updated Cart', cart)
       window.localStorage.setItem(JSON.stringify(cart))
    }

    useEffect(() => {
        dispatch(fetchProduct(productId))
    }, [dispatch, productId])

    return (
        <div className='product'>
            <img src={`/${product.imageUrl}`} />
            <h2>Name: {product.name}</h2>
            <h2>Price: {product.price}</h2>
            <h2>Description: {product.description}</h2>
            <button onClick={(e) => handleAddToCart(userId, product.id)}>Add to Cart</button>
            <button onClick={(e) => handleAddtoCartGuest()}>Add to Cart Guest</button>
        </div>
    )
}

export default SingleProduct;
