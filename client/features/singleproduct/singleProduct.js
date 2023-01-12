import React, { useEffect, useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {useParams} from 'react-router-dom'
import { fetchProduct, singleProduct } from './singleProductSlice';

const singleProduct = () => {
    const {productId} = useParams();
    const product = useSelector(singleProduct)

    useEffect(() => {
        dispatch(fetchProduct(productId))
    },[dispatch, productId])

    return (
        <div className='product'>
            <h2>Name: {product.name}</h2>
            <h3>Quantity: {product.quantity}</h3>
            <h4>Description: {product.description}</h4>
            <h5>Price: {product.price}</h5>
        </div>
    )
}

export default singleProduct