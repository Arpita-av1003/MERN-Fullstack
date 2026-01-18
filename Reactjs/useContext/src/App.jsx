import React from 'react'
import Child1 from './child1'
import { createContext } from 'react';

export const postman = createContext();

const App = () => {
  let data = {
    fname: "Arpita",
    lname: "Singh",
  };
  return (
    <postman.Provider value={data}>
      <div>
        <Child1 />
      </div>
    </postman.Provider>
  );
};

export default App

