import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchUserAsync, selectUser } from "../user/userSlice";
import { fetchCartAsync, selectCart } from "../cart/cartSlice";
import { Navigate } from "react-router-dom";


const Checkout = () => {
  const userId = useSelector((state) => state.auth.me.id);

  const userCart = useSelector(selectCart);

  let user = useSelector(selectUser);
  let userProducts = user.products;

  const [toggleShipping, setToggle] = useState(false)
  const [toggleCreditCard, setToggleCreditCard] = useState(false)
  const [toggleBilling, setToggleBilling] = useState(true)



  const handleToggleShipping = () => {
    setToggle(!toggleShipping)
  }

  const handleToggleCreditCard = () => {
    setToggleCreditCard(!toggleCreditCard)
  }

  const handleToggleBilling = () => {
    setToggleBilling(!toggleBilling)
  }

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUserAsync(userId));
    dispatch(fetchCartAsync(userId));
  }, [dispatch]);

  // const checkOutRedirect = ()=>{
  //   Navigate('/Confirmation')
  // }

  return (
    <div className="checkoutOuter">
      <section className="checkoutLeftSection">
        <div className="leftSectionTop">
          <h2 className="checkoutTitle">Checkout</h2>
          <h3 className="shippingInfo" onClick={handleToggleShipping}>Shipping Information <i className="arrow"/> </h3>

          {toggleShipping ?
          <form className="checkoutForm">
            <label>First Name</label>
            <input
              className="checkoutInput"
              type="text"
              placeholder="Enter your first name..."
            />
            <label>Last Name</label>
            <input
              className="checkoutInput"
              type="text"
              placeholder="Enter your last name..."
            />
            <label>Shipping Address</label>
            <input
              className="checkoutInput"
              type="textarea"
              placeholder="Enter your address..."
            />
            <label>Zip Code</label>
            <input
              className="checkoutInput"
              type="text"
              placeholder="Enter your zip code..."
            />
            <label>State</label>
            <input
              className="checkoutInput"
              type="text"
              placeholder="Enter your state"
            />
            <label>Email</label>
            <input
              className="checkoutInput"
              type="text"
              placeholder="Enter your email address..."
            />
          </form> : <></>}
        </div>
        <div className="leftSectionCenter">
          <h3 className="creditCardInfo" onClick={handleToggleCreditCard}> Credit Card Information <i className="arrow"/> </h3>
          {toggleCreditCard ?
          <form className="creditCardForm">
            <label className="creditCardInfo">Card Number</label>
            <input
              className="creditCardInput"
              type="text"
              placeholder="Credit Card Number"
            />
            <label className="creditCardInfo">Card Type</label>
            <input className="creditCardInput" type="text" placeholder="Type" />
            <label className="creditCardInfo">Security Code</label>
            <input className="creditCardInput" type="text" placeholder="CVV" />
            <label className="creditCardInfo">Expiration Date</label>
            <input
              className="creditCardInput"
              type="text"
              placeholder="MM/YY"
            />
          </form> : <></> }
        </div>
        <div className="leftSectionBottom">
          <h3>Billing Address</h3>
          <label>Same as Shipping Address</label>
          <input className="checkbox" type="checkbox" onChange={handleToggleBilling} />
          {toggleBilling ?
          <form className="billingAddress">
            <label>Address</label>
            <input
              className="billingInput"
              type="textarea"
              placeholder="Enter your address..."
            />
            <label>Zip Code</label>
            <input
              className="billingInput"
              type="text"
              placeholder="Enter your zip code..."
            />
            <label>State</label>
            <input
              className="billingInput"
              type="text"
              placeholder="Enter your state"
            />
          </form>: <></>}
        </div>
      </section>
      <section className="checkoutRightSection">
        <div>
          {userProducts.map((product) => {
            return (
              <div className="productBox" key={product.id}>
                <img className="checkoutImg" src={`/${product.imageUrl}`} />
                <h4 className="checkoutName">{product.name}</h4>
                <p className="checkoutQuantity">Quantity: {product.cart.cartQuantity}</p>
                <p>
                  Price:{" "}
                  {`$${(product.cart.cartQuantity * product.price).toFixed(2)}`}
                </p>
              </div>
            );
          })}
        </div>
        <section className="rightSideBottom" >
        <h3>
          {/* The total Price is calculate using a reducer to accumulate the quantity of the product in the cart multiplied by the price of the product. */}
          Total Price:{" "}
          {userProducts
            .reduce(
              (acc, product) => acc + product.cart.cartQuantity * product.price,
              0
            )
            .toFixed(2)}
        </h3>
        <h4>Shipping: Free</h4>
        <button className="checkout-button">CHECKOUT</button>
        </section>
      </section>
    </div>
  );
};

export default Checkout;
