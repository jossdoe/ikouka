import React from 'react'
import { render, screen } from '../../utils/testing'
import userEvent from '@testing-library/user-event'
import { Button, ButtonProps } from './index'

const LABEL_TEXT = 'Click Me'

const VARIANTS: ButtonProps['variant'][] = [
  'primary',
  'secondary',
  'text',
  undefined
]

const SIZES: ButtonProps['size'][] = ['sm', 'md', 'lg', undefined]

VARIANTS.forEach((variant) => {
  SIZES.forEach((size) => {
    test(`Button (onClick) – ${variant}, ${size}`, async () => {
      const onClick = jest.fn()

      const { asFragment } = render(
        <Button variant={variant} size={size} onClick={onClick}>
          {LABEL_TEXT}
        </Button>
      )

      expect(asFragment()).toMatchSnapshot()

      expect(screen.getByRole('button')).toHaveTextContent(LABEL_TEXT)

      expect(onClick.mock.calls).toHaveLength(0)
      await userEvent.click(screen.getByText(LABEL_TEXT))
      expect(onClick.mock.calls).toHaveLength(1)
    })
  })
})

VARIANTS.forEach((variant) => {
  SIZES.forEach((size) => {
    test(`Button (href) – ${variant}, ${size}`, async () => {
      const { asFragment } = render(
        <Button variant={variant} size={size} href="#">
          {LABEL_TEXT}
        </Button>
      )

      expect(asFragment()).toMatchSnapshot()

      expect(screen.getByRole('link')).toHaveTextContent(LABEL_TEXT)
      expect(screen.getByRole('link')).toHaveAccessibleName(LABEL_TEXT)
      expect(screen.getByRole('link')).toHaveAttribute('href', '#')
      expect(screen.getByRole('link')).toHaveAttribute('target', '_blank')
      expect(screen.getByRole('link')).toHaveAttribute(
        'rel',
        'noopener noreferrer'
      )
    })
  })
})
