import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  
  let counter = 15;

  const addValue = () => {
    // console.log("value added", Math.random());
    console.log("value added", counter);
    counter = counter + 1;
  }


  return (
    <>
      <h1>Chai Aur React!</h1>
      <h2>Counter value: {counter}</h2>

      <button onClick={addValue}>Increment</button>
      <button>Decrement</button>
    </>
  )
}

export default App
