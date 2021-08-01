import ReactDOM from 'react-dom'
import { act } from 'react-dom/test-utils'
import { ValidatedInput } from '.'

let container;

beforeAll(() => {
  container = document.createElement('div');
  document.body.appendChild(container);
});

describe('Validated Input', () => {
  act(()=>{
    ReactDOM.render(<ValidatedInput type="email" errorMessage="Not a valid e-mail!" />, container);
  })

  const errorMessage

  it('is email', () => {
    expect(ExampleComponent).toBeTruthy()
  })
})
