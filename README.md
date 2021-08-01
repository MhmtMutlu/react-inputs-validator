# react-input-validate

> Simple input validator React component

[![NPM](https://img.shields.io/npm/v/react-input-validate.svg)](https://www.npmjs.com/package/react-input-validate) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save react-input-validate
```

## Usage

```jsx
import { ValidatedInput } from 'react-input-validate'

function App(){
  return(
    <>
      <ValidatedInput
        type="email" // email / password
        errorMessage="Not a valid e-mail!" // Error message for input
        ... Other Props
      />
    </>
  )
}

Other Props
- message="Must be a valid e-mail!" // Info message for input
- minLength="0" // Min length of a password
- maxLength="10" // Max length of a password
```

## License

MIT

## Contributors
- [Beste Tokpınar](github.com/bstkpnr)
- [Gizem Yakabağ](github.com/gizemykbg)
- [Mehmet Mutlu](github.com/MhmtMutlu)
- [Mehmet Alperen](github.com/alperenmehmet)
- [Mehmet Hilmi](github.com/mowvf)
