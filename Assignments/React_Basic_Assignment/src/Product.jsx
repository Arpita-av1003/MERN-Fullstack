import React, { useState } from 'react';

const Product = ({ productName, price }) => {
  const [count, setCount] = useState(0);
  const increment = () => setCount(count + 1);
  const decrement = () => {
    if (count > 0) setCount(count - 1);
  };

  return (
    <div className="product">
      <h2>{productName}</h2>
      <p className="price">Price:{price}</p>
      <div className="counter-controls">
        <button onClick={decrement} className="btn minus">-</button>
        <span className="count-display">{count}</span>
        <button onClick={increment} className="btn plus">+</button>
      </div>

      <p className="total">Total:{count * price}</p>
    </div>
  );
};


export default Product;