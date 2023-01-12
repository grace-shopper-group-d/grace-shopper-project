import React, {useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';



const Cart = () => {
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
    <h3 id='cart-header' >{`You have (4) Items in Your Cart`}</h3>
    <div id='item1'>
      <div> 
        <img className="cart-item-container" src={bike.imgUrl} />
        <div className='cart-item-img'>`{`${bike.name}`}</div>
        <div className='cart-item-price'>{`${bike.price}`}</div>
        <div className='cart-item-price'>{`Quantity`}</div>
        <div className='cart-item-price'>{`Total`}</div>
      </div>
      <div id='item2'> 
        <img className="cart-item-container" src={bike.imgUrl} />
        <div className='cart-item-img'>`{`${bike.name}`}</div>
        <div className='cart-item-price'>{`${bike.price}`}</div>
        <div className='cart-item-price'>{`Quantity`}</div>
        <div className='cart-item-price'>{`Total`}</div>
      </div>
      <div id='item3'> 
        <img className="cart-item-container" src={bike.imgUrl} />
        <div className='cart-item-img'>`{`${bike.name}`}</div>
        <div className='cart-item-price'>{`${bike.price}`}</div>
        <div className='cart-item-price'>{`Quantity`}</div>
        <div className='cart-item-price'>{`Total`}</div>
      </div>
    </div>
    </>

  )
}

export default Cart
