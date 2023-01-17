import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';





const GuestCart = () => {




  let cart = window.localStorage.getItem('cart');
  console.log(cart)

  const dispatch = useDispatch()

  // increases cart item quantity
  const handleQuantityIncrease = ({ cartId, userId, productId, cartQuantity }) => {
   console.log('guest cart increase')
  }

  // decreases cart item quantity
  const handleQuantityDecrease = ({ cartId, userId, productId, cartQuantity }) => {
    console.log('guest cart decrease')
  }

  // handles item delete
  const handleItemDelete = (cartId) => {
    console.log('guest cart delete')
  }


  // useEffect
  useEffect(() => {

  }, [dispatch])



  return (
    <>
    <div>Test</div>
      {/* <button className='checkout-button'>Proceed To Checkout</button>
      <h3 id='cart-header' >Guest Cart</h3>
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
      </div> */}
    </>

  )
}

export default GuestCart
