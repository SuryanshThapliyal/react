import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './componenets/card'

function App() {
  const [count, setCount] = useState(0)
  let myobj = {
    username:'suryansh',
    age:'21'
  }
  let newArray=[1,2,3,4,5,6]
  return (
    <>
      <h1 className='bg-green-400 text-black
      p-4 rounded-xl mb-4' >Tailwind test</h1>
      <Card channel='supersurya' someobj={myobj} someArray={newArray}/>
      <Card  channel='surya the great'/>
    </>
  )
}

export default App
