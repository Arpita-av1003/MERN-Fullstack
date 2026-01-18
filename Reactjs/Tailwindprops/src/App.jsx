import './App.css'
// import Card from './components/Card'
import { useState } from 'react'
import Button from './components/Button'

function App(){
    const[count,setCount]=useState(0);
    function handleClick(){
        setCount(count+1);
    }
    return(
        <div>
        <Button handleClick={handleClick} text="click me"><h1>{count}</h1></Button>
        {/* <Card>
        <h1>My name is Arpita</h1>
        <p>Trying hard to survive this world.</p>
        <p>I want an escape from reality.</p>
        </Card> */}
        </div>
    )
}

export default App
