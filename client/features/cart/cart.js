import React, {useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { fetchUserAsync, selectUser } from '../user/userSlice';



const Cart = () => {


  const userId = useSelector((state) => state.auth.me.id);


  let user = useSelector(selectUser);
  let cartProducts = user.products
  const dispatch = useDispatch()
console.log(user)

//  console.log(cartProducts[0].cartQuantity)


  useEffect(()=> {
    dispatch(fetchUserAsync(userId))
  },[dispatch])



  return (
    <>

    <h1>{user.first_Name}'s Cart</h1>
    <h3 id='cart-header' >{`You have  Items in Your Cart`}</h3>
    <div  id='cart-items-container'>
      {cartProducts ? cartProducts.map((product) => (
        <div className='cart-item-container'> 
        <img className="cart-item-img" src={product.imageUrl} />
        <div className='cart-item-name'>{`${product.name}`}</div>
        <div className='cart-item-price'>{`${product.price}`}</div>
        <div className='cart-quantity-container'>
          <img src='blackplus.png' height='16px' />
        <div className='cart-item-price'>{product.cart.cartQuantity}</div>
        <img src='blackminus.png'  height='16px' />
        </div>

        <div className='cart-item-price'>{product.price * product.cart.cartQuantity}</div>
        <img src='reddelete.png' />
      </div>
      ))
             : <div>Nothing in your cart</div>}
    </div>
    <button>Checkout</button>
    </>

  )
}

export default Cart
