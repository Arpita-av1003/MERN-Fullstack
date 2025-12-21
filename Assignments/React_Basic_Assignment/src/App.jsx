import React from 'react';
import Product from './Product';
import counter from './counter';
import './App.css'; 

function App() {
  return (
    <div className="container">
      <h1>Product List</h1>

      
      <Product Productname="iPhone 15" price="799" />

     
      <Product Productname="MacBook Air" price="1100" />
      
      
      <Product Productname="AirPods" price="$199" />
    </div>
  );
}

export default App;