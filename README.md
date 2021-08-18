# react-inputs-validator

> Simple input validator React component

[![NPM](https://img.shields.io/npm/v/react-inputs-validator.svg)](https://www.npmjs.com/package/react-inputs-validator) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save react-inputs-validator
```

## Usage

```jsx
import { ValidatedInput } from 'react-inputs-validator'

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
<ul style="list-style-type:disc">
   <li><a href="https://github.com/bstkpnr">Beste Tokpınar</a></li>
   <li><a href="https://github.com/gizemykbg">Gizem Yakabağ</a></li>
   <li><a href="https://github.com/MhmtMutlu">Mehmet Mutlu</a></li>
   <li><a href="https://github.com/alperenmehmet">Mehmet Alperen</a></li>
   <li><a href="https://github.com/movwf">Mehmet Hilmi</a></li>
</ul>
