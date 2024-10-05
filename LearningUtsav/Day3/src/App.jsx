import { useState } from 'react'
import './App.css'

// simple program using useState, starting hooks!
function App() {
const [counter, setCounter] = useState(0);

const handleClick = ()=>{
  setCounter(counter+1);
  }
  
  return (
    <>
     <button onClick={handleClick}>Counter {counter}</button>
    </>
  )
}

export default App
