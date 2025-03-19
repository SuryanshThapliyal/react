import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [counter, setCounter]=useState(5)
  return (
    <>
      <h1>chai aur react</h1>
      <h2>counter value: {counter}</h2>
      <button
      onClick={() => 
        counter = setCounter(counter + 1)
      }
      >add value</button>
      <br />
      <br />
      <button
      onClick={() =>
        counter = setCounter(counter -1)
      }
      >remove value</button>
    </>
  )
}

export default App
