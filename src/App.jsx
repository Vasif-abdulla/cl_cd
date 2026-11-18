import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <main className="container">
      <div className="card">
        <span className="badge">CI/CD Practice</span>
        <h1>React CI/CD App</h1>
        <p className="subtitle">
          A simple React project ready for automated linting, testing, building, and deployment.
        </p>

        <div className="counter-box">
          <p className="count-display" data-testid="count-value">
            Count: <strong>{count}</strong>
          </p>
          <div className="actions">
            <button onClick={() => setCount((c) => c - 1)}>-1</button>
            <button onClick={() => setCount(0)} className="secondary">
              Reset
            </button>
            <button onClick={() => setCount((c) => c + 1)}>+1</button>
          </div>
        </div>
      </div>
    </main>
  )
}

export default App
