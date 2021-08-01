import React from 'react'

const Validators = {
  email: {
    regex: /[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/,
    errorMessage: (errorMessage) => errorMessage + ''
  },
  password: {
    regex: /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$/,
    message: 'Password should be  !',
    errorMessage: (errorMessage) => errorMessage + ''
  }
}

const TypeLabels = {
  email: 'Email',
  password: 'Password'
}

export const ValidatedInput = ({ type, errorMessage, ...settings }) => {
  const [error, setError] = React.useState(null)
  const [message, setMessage] = React.useState(Validators[type].message)
  const [isFocus, setIsFocus] = React.useState(false)
  const handleOnChange = (e) => {
    e.preventDefault()
    const isValid = e.target.value.match(Validators[type].regex)
    if (isValid === null) {
      setError(Validators[type].errorMessage(errorMessage))
    } else {
      setError(null)
      setMessage(null)
    }
    console.log(isValid)
  }
  return (
    <React.Fragment>
      <label htmlFor='inputId'>{TypeLabels[type]}</label>
      <br />
      <input
        id='inputId'
        type={type}
        onChange={handleOnChange}
        onFocus={(e) => setIsFocus(true)}
      />
      {isFocus && message && (
        <React.Fragment>
          <br />
          {message}
        </React.Fragment>
      )}
      <br />
      <span style={{ color: 'red' }}>{error && error}</span>
    </React.Fragment>
  )
}
