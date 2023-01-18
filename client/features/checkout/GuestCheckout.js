import React, { useState } from "react";
import { Link } from "react-router-dom";

const GuestCheckout = () => {
  let cart = window.localStorage.getItem("cart");
  cart = JSON.parse(cart);

  const [toggleShipping, setToggle] = useState(false);
  const [toggleCreditCard, setToggleCreditCard] = useState(false);
  const [toggleBilling, setToggleBilling] = useState(true);

  const handleToggleShipping = () => {
    setToggle(!toggleShipping);
  };

  const handleToggleCreditCard = () => {
    setToggleCreditCard(!toggleCreditCard);
  };

  const handleToggleBilling = () => {
    setToggleBilling(!toggleBilling);
  };

  return (
    <div className="checkoutOuter">
      <section className="checkoutLeftSection">
        <div className="leftSectionTop">
          <h2 className="checkoutTitle">Checkout</h2>
          <h3 className="shippingInfo" onClick={handleToggleShipping}>
            Shipping Information <i className="arrow" />{" "}
          </h3>

          {toggleShipping ? (
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
            </form>
          ) : (
            <></>
          )}
        </div>
        <div className="leftSectionCenter">
          <h3 className="creditCardInfo" onClick={handleToggleCreditCard}>
            {" "}
            Credit Card Information <i className="arrow" />{" "}
          </h3>
          {toggleCreditCard ? (
            <form className="creditCardForm">
              <label className="creditCardInfo">Card Number</label>
              <input
                className="creditCardInput"
                type="text"
                placeholder="Credit Card Number"
              />
              <label className="creditCardInfo">Card Type</label>
              <input
                className="creditCardInput"
                type="text"
                placeholder="Type"
              />
              <label className="creditCardInfo">Security Code</label>
              <input
                className="creditCardInput"
                type="text"
                placeholder="CVV"
              />
              <label className="creditCardInfo">Expiration Date</label>
              <input
                className="creditCardInput"
                type="text"
                placeholder="MM/YY"
              />
            </form>
          ) : (
            <></>
          )}
        </div>
        <div className="leftSectionBottom">
          <h3>Billing Address</h3>
          <label>Same as Shipping Address</label>
          <input
            className="checkbox"
            type="checkbox"
            onChange={handleToggleBilling}
          />
          {toggleBilling ? (
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
            </form>
          ) : (
            <></>
          )}
        </div>
      </section>
      <section className="checkoutRightSection">
        <div>
          {cart.map((product) => {
            return (
              <div className="productBox" key={product.id}>
                <img className="checkoutImg" src={`/${product.imageUrl}`} />
                <h4 className="checkoutName">{product.name}</h4>
                <p className="checkoutQuantity">
                  Quantity: {product.cartQuantity}
                </p>
                <p>
                  Price:{" "}
                  {`$${(product.cartQuantity * product.price).toFixed(2)}`}
                </p>
              </div>
            );
          })}
        </div>
        <section className="rightSideBottom">
          <h3>
            {/* The total Price is calculate using a reducer to accumulate the quantity of the product in the cart multiplied by the price of the product. */}
            Total Price:{" "}
            {cart
              .reduce(
                (acc, product) => acc + product.cartQuantity * product.price,
                0
              )
              .toFixed(2)}
          </h3>
          <h4>Shipping: Free</h4>
          <Link to={`/confirmation`}>
            <button className="checkout-button">CHECKOUT</button>
          </Link>
        </section>
      </section>
    </div>
  );
};

export default GuestCheckout;
