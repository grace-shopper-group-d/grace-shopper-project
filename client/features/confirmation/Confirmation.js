import React from 'react';

const Confirmation = ()=>{
  return(

    <div>
      <h1> Thanks you for your order</h1>
      <h3>Order number: {Math.floor(10000 + Math.random()*900000)}</h3>
     </div>
  )

};
console.log(Confirmation)
export default Confirmation;

