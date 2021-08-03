import React from 'react'

import { ValidatedInput } from 'react-inputs-validator'

const App = () => {
  return <ValidatedInput errorMessage="Not a valid email!" type="email" />
}
export default App
