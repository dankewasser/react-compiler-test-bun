import ContextGrandChild from './ContextGrandChild'

function ContextChild() {
  'use memo'
  console.log('re-render ContextChild')
  return <ContextGrandChild />
}

export default ContextChild
