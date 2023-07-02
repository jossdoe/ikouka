import React from 'react'
import { render, screen } from '@testing-library/react'
import { Button } from './index'

describe('Button', () => {
  it('renders without crashing', () => {
    render(<Button variant="primary">Click Me</Button>)
    const button = screen.getByText(/click me/i)
    expect(button).toBeInTheDocument()
  })
})
