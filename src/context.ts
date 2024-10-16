import { createContext } from 'react'

export const AppContext = createContext<Record<string, string | number>>({
  count: 0,
  text: 'text',
})
