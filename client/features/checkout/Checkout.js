import React from "react";


const Checkout = () => {

  return (
    <div className="checkoutOuter">
      <section className="leftSection">
        <div className="leftSectionTop">
          <h2>Checkout</h2>
          <form className="checkoutForm">
            <label>First Name</label>
            <input className="checkoutInput" type="text" placeholder="Enter your first name..." />
            <label>Last Name</label>
            <input className="checkoutInput" type="text" placeholder="Enter your last name..." />
            <label>Shipping Address</label>
            <input className="checkoutInput" type="textarea" placeholder="Enter your address..." />
            <label>Zip Code</label>
            <input className="checkoutInput" type="text" placeholder="Enter your zip code..." />
            <label>State</label>
            <input className="checkoutInput" type="text" placeholder="Enter your state" />
            <label>Email</label>
            <input className="checkoutInput" type="text" placeholder="Enter your email address..." />
          </form>
        </div>
        <div className="leftSectionCenter">
          <form className="creditCardForm">
          <label>Card Number</label>
            <input className="creditCardInput" type="text" placeholder="Credit Card Number" />
            <label>Card Type</label>
            <input className="creditCardInput" type="text" placeholder="Type" />
            <label>Security Code</label>
            <input className="creditCardInput" type="text" placeholder="CVV" />
            <label>Expiration Date</label>
            <input className="creditCardInput" type="text" placeholder="MM/YY" />
          </form>
        </div>
        <div className="leftSectionBottom">
          <h4>Billing Address</h4>
          <label>Same as Shipping Address</label>
            <input className="checkbox" type="checkbox" />
          <form className="billingAddress">
          <label>Address</label>
            <input className="billingInput" type="textarea" placeholder="Enter your address..." />
            <label>Zip Code</label>
            <input className="billingInput" type="text" placeholder="Enter your zip code..." />
            <label>State</label>
            <input className="billingInput" type="text" placeholder="Enter your state" />
            </form>
        </div>
      </section>
      <section className="rightSection">

      </section>
    </div>
  )

}


export default Checkout
