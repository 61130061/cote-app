import { useState } from 'react'

function App() {
   const [count, setCount] = useState(0)

   return (
      <div className="p-5">
         <header className="App-header">
            <div className="text-2xl font-bold text-blue-400">Hello world</div>
         </header>
      </div>
   )
}

export default App
