import {useState} from "react";
import './App.css';

function App(){
  let [counter,setcounter]=useState(0)
  const increase=()=>{
    setcounter(counter+1)
  }

  const decrease=()=>{
    setcounter(counter-1)
  }
  return(
    <>
    <h1>Hooks</h1>
    <h2>Counter Value:{counter}</h2>
    <button onClick={increase}>Add Value</button>
    <br />
    <button onClick={decrease}>Remove Value</button>
    </>
  )
}

export default App;