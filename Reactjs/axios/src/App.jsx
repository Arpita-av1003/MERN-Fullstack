import React from 'react'
import { useState,useEffect } from 'react';
import axios from 'axios';

const App = () => {
  const[data,setdata]=useState();
  useEffect(()=>{
    const fetchData =async()=>{
      try{
        const response=await axios.get('https://dummyjson.com/products');
        // const data =await response.json();
        setdata(response.data);
        console.log(response.data);
      }catch(error){
        console.log(error);
      }
      return [data]
    };
    fetchData();
  });
  return (
    <div>
      
    </div>
  )
};

export default App;

