import { useEffect, useState } from 'react'
import './App.css'
import Child from './Child'
import ContextChild from './ContextChild'
import { AppContext } from './context'

function App() {
  'use memo'
  console.log('rendered App')

  const [count, setCount] = useState<number>(0)

  const [contextValue, setContextValue] = useState<
    Record<string, string | number>
  >({
    count: 0,
    text: 'text',
  })

  useEffect(() => {
    setContextValue((prev) => ({ count, text: prev.text }))
  }, [count])

  return (
    <>
      <h1>React Compiler Test</h1>

      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>

      <div>
        <Child count={count} obj={{ text: 'text' }} />
      </div>

      <div>
        <AppContext.Provider value={contextValue}>
          <ContextChild />
        </AppContext.Provider>
      </div>
    </>
  )
}

export default App
