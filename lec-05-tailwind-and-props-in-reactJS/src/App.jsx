import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 className='bg-green-400 mb-4 text-white text-center p-4 rounded-2xl'>Tailwind Test!</h1>
      <Card username="john_doe" btnText="Check Profile"/>
      <Card username="jane_smith"/>
    </>
  )
}

export default App
