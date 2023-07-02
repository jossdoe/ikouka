import React from 'react'
import { render, screen } from '../../utils/testing'
import { Badge, BadgeProps } from './index'

const LABEL_TEXT = 'Badge Text'

const COLORS: BadgeProps['color'][] = [
  'gray',
  'green',
  'red',
  'purple',
  undefined
]

const VARIANTS: BadgeProps['variant'][] = ['filled', 'outline', undefined]

const SIZES: BadgeProps['size'][] = ['md', 'lg', undefined]

COLORS.forEach((color) => {
  VARIANTS.forEach((variant) => {
    SIZES.forEach((size) => {
      test(`Badge – ${color}, ${variant}, ${size}`, async () => {
        const { asFragment } = render(
          <Badge color={color} variant={variant} size={size}>
            {LABEL_TEXT}
          </Badge>
        )

        expect(asFragment()).toMatchSnapshot()

        expect(screen.getByText(LABEL_TEXT)).toBeInTheDocument()
      })
    })
  })
})
