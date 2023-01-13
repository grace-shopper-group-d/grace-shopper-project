import React, {useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { fetchUserAsync, selectUser } from '../user/userSlice';



const Cart = () => {


  const userId = useSelector((state) => state.auth.me.id);


  let user = useSelector(selectUser);
  let cartProducts = user.products
  const dispatch = useDispatch()

 


  useEffect(()=> {
    dispatch(fetchUserAsync(userId))
  },[dispatch])

  let bike = {
    imgUrl:  'https://www.shutterstock.com/image-photo/yellow-black-29er-mountainbike-thick-260nw-1498702814.jpg',
    name: "Super turbo bicycle",
    price: 299.99,
    description: "Featuring a wide, dual-spring padded cruiser seat and classic cruiser handlebars, this bike provides an upright and comfortable riding position",

  }

  let bike2 = {
    imgUrl:  'https://www.shutterstock.com/image-photo/yellow-black-29er-mountainbike-thick-260nw-1498702814.jpg',
    price: 299.99,
    description: "Featuring a wide, dual-spring padded cruiser seat and classic cruiser handlebars, this bike provides an upright and comfortable riding position",

  }

  let bike3 = {
    imgUrl:  'https://www.shutterstock.com/image-photo/yellow-black-29er-mountainbike-thick-260nw-1498702814.jpg',
    price: 299.99,
    description: "Featuring a wide, dual-spring padded cruiser seat and classic cruiser handlebars, this bike provides an upright and comfortable riding position",

  }

  return (
    <>

    <h1>{user.first_Name}'s Cart</h1>
    <h3 id='cart-header' >{`You have  Items in Your Cart`}</h3>
    <div  id='cart-items-container'>
      {cartProducts ? cartProducts.map((product) => (
        <div className='cart-item-container'> 
        <img className="cart-item-img" src={product.imageUrl} />
        <div className='cart-item-name'>`{`${product.name}`}</div>
        <div className='cart-item-price'>{`${product.price}`}</div>
        <div className='cart-item-price'>
          <button class="plus_minus">+</button>
          <span class="number">1</span>
          <button class="minus_plus">-</button>
        </div>
        <div className='cart-item-price'>{product.price * 2}</div>
      </div>
      ))
             : <div>Nothing in your cart</div>}
    </div>
    </>

  )
}

export default Cart
