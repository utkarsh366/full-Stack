import React from 'react'
import { useState } from 'react'

function App() {
 var [a,b] = useState(23);
  return (
    <div className='w-full h-screen bg-zinc-900 text-white'>
      <h1>{a+2}</h1>
      <button className='px-3 py-1 bg-green-500 rounded-md text-xs'> Click </button>
      </div>
    
  )
}

export default App