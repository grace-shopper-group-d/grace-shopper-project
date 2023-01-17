import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { fetchUserAsync, removeUserItemAsync, selectUser } from '../user/userSlice';
import { deleteCartAsync, decrementCartAsync, fetchCartAsync, editCartAsync, selectCart } from './cartSlice';



const Cart = () => {


  const userId = useSelector((state) => state.auth.me.id);

  let cart = useSelector(selectCart)
  let user = useSelector(selectUser);
  let cartProducts = user.products

  const dispatch = useDispatch()

  // increases cart item quantity
  const handleQuantityIncrease = ({ cartId, userId, productId, cartQuantity }) => {
    let newCart = {
      cartId: cartId,
      userId: userId,
      productId: productId,
      cartQuantity: cartQuantity
    }
    newCart.cartQuantity++
    dispatch(editCartAsync(newCart))
  }

  // decreases cart item quantity
  const handleQuantityDecrease = ({ cartId, userId, productId, cartQuantity }) => {
    let newCart = {
      cartId: cartId,
      userId: userId,
      productId: productId,
      cartQuantity: cartQuantity
    }
    if (cartQuantity > 1) {
      newCart.cartQuantity--
    }
    dispatch(editCartAsync(newCart))
  }

  // handles item delte
  const handleItemDelete = (cartId) => {
    dispatch(deleteCartAsync(cartId));
  }


  // useEffect
  useEffect(() => {
    dispatch(fetchUserAsync(userId));
    dispatch(fetchCartAsync(userId))
  }, [dispatch, cart.length])



  return (
    <>
      <button className='checkout-button'>Proceed To Checkout</button>
      <h3 id='cart-header' >{`${user.first_Name} ${user.last_Name}`}'s Cart</h3>
      <div id='cart-columns'>
        <div  className='cart-column-photo'>Photo</div>
        <div  className='cart-column-name'>Name</div>
        <div className='cart-column-price'>Price</div>
        <div className='cart-column-quantity'>Quantity</div>
        <div className='cart-column-total'>Total</div>
        <div className='cart-column-delete'>Delete</div>
      </div>
      <div id='cart-items-container'>
        {cartProducts && cartProducts.length ?
          cartProducts.map((product) => (
            <div key={`cart-item-${product.id}`} className='cart-item-container'>
              <img key={`cart-item-img-${product.id}`} className="cart-item-img" src={product.imageUrl} />
              <div key={`cart-item-name-${product.id}`} className='cart-item-name'>{`${product.name}`}</div>
              <div key={`cart-item-price-${product.id}`} className='cart-item-price'>{`$${product.price}`}</div>
              <div key={`cart-item-quantity-${product.id}`} className='cart-quantity-container'>
                <img onClick={(e) => handleQuantityIncrease(product.cart)} src='blackplus.png' height='16px' />
                <div className='cart-item-total'>{product.cart.cartQuantity}</div>
                <img onClick={(e) => handleQuantityDecrease(product.cart)} src='blackminus.png' height='16px' />
              </div>

              <div id={`cart-item-total-${product.id}`} className='cart-item-price' >{`$${(product.cart.cartQuantity * product.price).toFixed(2)}`}</div>
              <img id={`cart-item-delete-${product.id}`} onClick={(e) => handleItemDelete(product.cart.cartId)} src='reddelete.png' />
            </div>)) : <h2 className='empty-cart'>Your Cart is Empty!</h2>}
        <div></div>
      </div>
    </>

  )
}

export default Cart
