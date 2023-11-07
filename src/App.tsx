import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  const multiplyByTwo = () => {
    setCount(count * 2)
  }

const data = [
  {id: 13, name: 'Nino', surname: 'Bulat'},
]

const selectedObject = data.find((element) => element.id === count)

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
        <p>Selected object:</p>
        {selectedObject && (
          <ul>
            <li>{selectedObject.id}</li>
            <li>{selectedObject.name}</li>
            <li>{selectedObject.surname}</li>
          </ul>
        )}
      </div>
    </>
  )
}

export default App
