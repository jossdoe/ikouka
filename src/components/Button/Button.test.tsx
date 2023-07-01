import React from 'react'
import * as ReactDOM from 'react-dom'
import { Button } from './index'

describe('Button', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(<Button variant="primary">Click Me</Button>, div)
    ReactDOM.unmountComponentAtNode(div)
  })
})
