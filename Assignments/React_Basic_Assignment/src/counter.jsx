import React, { useState } from 'react';

const counter = () => {
  const [count, setCount] = useState(0);

  const increment = () => setCount(count + 1);
  const decrement = () => {
    if (count > 0) setCount(count - 1);
  };

  return (
    <div className="wrapper">
      <h3>Quantity: {count}</h3>
      <button onClick={decrement} className="counter-button">-</button>
      <button onClick={increment} className="counter-button">+</button>
    </div>
  );
};

export default counter;