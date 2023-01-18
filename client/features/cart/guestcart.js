import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';





const GuestCart = () => {

  const [render, setRender] = useState(false)

  let cart = window.localStorage.getItem('cart');
  cart = JSON.parse(cart)



  // increases cart item quantity
  const handleQuantityIncrease = (product) => {
    let idx = cart.indexOf(product);
    cart[idx].cartQuantity++;
    window.localStorage.setItem('cart', JSON.stringify(cart));
    setRender(!render)
  }

  // decreases cart item quantity
  const handleQuantityDecrease = (product) => {
    let idx = cart.indexOf(product);
    if (cart[idx].cartQuantity > 1)
    cart[idx].cartQuantity--;
    window.localStorage.setItem('cart', JSON.stringify(cart));
    setRender(!render)
  }

  // handles item delete
  const handleItemDelete = (product) => {
    let idx = cart.indexOf(product);
    let editedCart = cart.filter(currentProduct => currentProduct !== product);
    console.log(editedCart)
    window.localStorage.setItem('cart', JSON.stringify(editedCart));
    setRender(!render)
  }


  // useEffect
  useEffect(() => {

  }, [render])


  return (
    <>
      <button className='checkout-button'>Proceed To Checkout</button>
      <h3 id='cart-header' >Guest Cart</h3>
      <div id='cart-columns'>
        <div className='cart-column-photo'>Photo</div>
        <div className='cart-column-name'>Name</div>
        <div className='cart-column-price'>Price</div>
        <div className='cart-column-quantity'>Quantity</div>
        <div className='cart-column-total'>Total</div>
        <div className='cart-column-delete'>Delete</div>
      </div>
      <div id='cart-items-container'>
        {cart && cart.length ?
          cart.map((product) => (
            <div key={`cart-item-${product.id}`} className='cart-item-container'>
              <img key={`cart-item-img-${product.id}`} className="cart-item-img" src={product.imageUrl} />
              <div key={`cart-item-name-${product.id}`} className='cart-item-name'>{`${product.name}`}</div>
              <div key={`cart-item-price-${product.id}`} className='cart-item-price'>{`$${product.price}`}</div>
              <div key={`cart-item-quantity-${product.id}`} className='cart-quantity-container'>
                <img onClick={(e) => handleQuantityIncrease(product)} src='blackplus.png' height='16px' />
                <div className='cart-item-total'>{product.cartQuantity}</div>
                <img onClick={(e) => handleQuantityDecrease(product)} src='blackminus.png' height='16px' />
              </div>

              <div id={`cart-item-total-${product.id}`} className='cart-item-price' >{`$${(product.cartQuantity * product.price).toFixed(2)}`}</div>
              <img onClick={(e) => handleItemDelete(product)} id={`cart-item-delete-${product}`} src='reddelete.png' />
            </div>)) : <h2 className='empty-cart'>Your Cart is Empty!</h2>}
        <div></div>
      </div>
    </>

  )
}

export default GuestCart
