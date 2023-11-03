import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  const multiplyByTwo = () => {
    setCount(count * 2)
  }

  return (
    <>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          Count is {count}
        </button>
        <button onClick={multiplyByTwo}>
          Multiply by 2
        </button>
      </div>
    </>
  )
}

export default App
