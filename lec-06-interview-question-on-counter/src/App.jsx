import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [counter, setCounter] = useState(15);

  const addValue = () => {
    // it's not going to work as expected, becuase useState sends data into batches
    // setCounter(counter + 1);
    // setCounter(counter + 1);
    // setCounter(counter + 1);
    // setCounter(counter + 1);

    // correct way
    // setCounter(() => {});
    setCounter((prevCounter) => prevCounter + 1);
    setCounter((prevCounter) => prevCounter + 1);
    setCounter((prevCounter) => prevCounter + 1);
    setCounter((prevCounter) => prevCounter + 1);
  }

  const removeValue = () => {
    setCounter(counter - 1);
  }

  return (
    <>
      <h1>Chai Aur React!</h1>
      <h2>Counter value: {counter}</h2>
      <br />
      <button onClick={addValue}>Add {counter}</button> <br />
      <button onClick={removeValue}>Remove {counter}</button>
      <p>footer: {counter}</p>
    </>
  )
}

export default App
