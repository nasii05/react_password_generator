import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [length, setlength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState('');

  return (
   <div className='w-full max-w-md mx-auto shadow-md 
   rounded-lg px-4 py-4 my-8 bg-gray-800 text-orange-500'>

   </div>
  )
}

export default App
