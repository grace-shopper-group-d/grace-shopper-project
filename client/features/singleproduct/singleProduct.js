import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom'
import { fetchProduct, singleProduct } from './singleProductSlice';

const SingleProduct = () => {
    const { productId } = useParams();
    const product = useSelector(singleProduct);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchProduct(productId))
    }, [dispatch, productId])

    return (
        <div className='product'>
            <img src={`/${product.imageUrl}`} />
            <h2>Name: {product.name}</h2>
            <h2>Price: {product.price}</h2>
            <h2>Description: {product.description}</h2>
        </div>
    )
}

export default SingleProduct;