import React from 'react'

import { ValidatedInput } from 'react-input-validate'
import 'react-input-validate/dist/index.css'

const App = () => {
  return <ValidatedInput errorMessage="Not a valid email!" type="email" />
}
export default App
