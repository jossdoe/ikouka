import React from 'react'
import { render, screen } from '../../utils/testing'
import { Stack, StackProps } from './index'

const SIZES: StackProps['size'][] = ['xs', 'sm', 'md', 'lg', 'xl', undefined]

SIZES.forEach((size) => {
  test(`Stack - ${size}`, () => {
    const { asFragment } = render(
      <Stack size={size}>
        <button />
        <button />
        <button />
      </Stack>
    )

    expect(asFragment()).toMatchSnapshot()

    expect(screen.getAllByRole('button')).toHaveLength(3)
  })
})
