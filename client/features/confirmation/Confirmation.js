import React from 'react';

const Confirmation = (props)=>{

  return(

    <div className='confirmation'>
      <h1> Thank you for your order</h1>
      <h3>Order number: {Math.floor(10000 + Math.random()*900000)}</h3>
     </div>
  )

};



export default Confirmation;

