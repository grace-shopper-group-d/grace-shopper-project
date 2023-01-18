import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchUserAsync, selectUser } from "../user/userSlice";
import { fetchCartAsync, selectCart } from "../cart/cartSlice";
import { Link } from "react-router-dom";

const Checkout = () => {
  const userId = useSelector((state) => state.auth.me.id);

  const userCart = useSelector(selectCart);

  let user = useSelector(selectUser);
  let userProducts = user.products;

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

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUserAsync(userId));
    dispatch(fetchCartAsync(userId));
  }, [dispatch]);

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
              <input
                className="checkoutInput"
                type="text"
                placeholder="FIRST NAME"
              />

              <input
                className="checkoutInput"
                type="text"
                placeholder="LAST NAME"
              />

              <input
                className="checkoutInput"
                type="textarea"
                placeholder="SHIPPING ADDRESS"
              />

              <input
                className="checkoutInput"
                type="text"
                placeholder="ZIP CODE"
              />

              <input
                className="checkoutInput"
                type="text"
                placeholder="STATE"
              />

              <input
                className="checkoutInput"
                type="text"
                placeholder="EMAIL"
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
              <input
                className="creditCardInput"
                type="text"
                placeholder="Credit Card Number"
              />
              <select>
                <option value="">Card Type</option>
                <option value="MasterCard">MasterCard</option>
                <option value="Visa">Visa</option>
                <option value="Discover">Discover</option>
                <option value="American Express">American Express</option>
              </select>

              <input
                className="creditCardInput"
                type="text"
                placeholder="CVV"
              />

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
              <input
                className="billingInput"
                type="textarea"
                placeholder="ADDRESS"
              />

              <input
                className="billingInput"
                type="text"
                placeholder="ZIP CODE"
              />

              <input className="billingInput" type="text" placeholder="STATE" />
            </form>
          ) : (
            <></>
          )}
        </div>
      </section>
      <section className="checkoutRightSection">
        <div>
          {userProducts.map((product) => {
            return (
              <div className="productBox" key={product.id}>
                <img className="checkoutImg" src={`/${product.imageUrl}`} />
                <h4 className="checkoutName">{product.name}</h4>
                <p className="checkoutQuantity">
                  Quantity: {product.cart.cartQuantity}
                </p>
                <p>
                  Price:{" "}
                  {`$${(product.cart.cartQuantity * product.price).toFixed(2)}`}
                </p>
              </div>
            );
          })}
        </div>
        <section className="rightSideBottom">
          <h3>
            {/* The total Price is calculate using a reducer to accumulate the quantity of the product in the cart multiplied by the price of the product. */}
            Total Price:{" "}
            {userProducts
              .reduce(
                (acc, product) =>
                  acc + product.cart.cartQuantity * product.price,
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

export default Checkout;
