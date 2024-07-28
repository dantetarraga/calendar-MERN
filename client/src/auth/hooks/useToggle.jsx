import { useState } from 'react'

const useToggle = (initialState) => {
  const [state, setState] = useState(initialState)

  const toggle = () => setState(prevState => !prevState)

  return [state, toggle]
}

export default useToggle
