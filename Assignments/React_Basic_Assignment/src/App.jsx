import React from 'react';
import Product from './Product';
import './App.css'; 

function App() {
  return (
    <div className="container">
      <h1>Products:</h1>
      <Product productName="Fruits" price="100" />
      <Product productName="Vegetables" price="200" />
    </div>
  );
}

export default App;