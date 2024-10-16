import { useContext } from 'react'
import { AppContext } from './context'

function ContextGrandChild() {
  'use memo'
  console.log('re-render ContextGrandChild')
  const contextValue = useContext(AppContext)

  return (
    <p>
      contextValue is {contextValue.text}
      <br />
    </p>
  )
}

export default ContextGrandChild
