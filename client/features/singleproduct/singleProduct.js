import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom'
import { fetchProduct, singleProduct } from './singleProductSlice';
import UpdateProduct from '../updateProduct/UpdateProduct';

const SingleProduct = () => {
    const isAdmin = useSelector((state) => state.auth.me.isAdmin);
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
            {isAdmin ? <UpdateProduct id={product.id} /> : null}
        </div>
    )
}

export default SingleProduct;