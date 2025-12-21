import React from 'react';

const Product = (Productname,price) => {
  return (
    <div className="product">
      <h2>{Productname}</h2>
      <p>Price:{price}</p>
    </div>
  );
};


export default Product;