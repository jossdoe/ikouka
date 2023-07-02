import React from 'react'
import { render, screen } from '../../utils/testing'
import { Stack, StackProps } from './index'

const SPACES: StackProps['space'][] = ['xs', 'sm', 'md', 'lg', 'xl', undefined]

SPACES.forEach((space) => {
  test(`Stack - ${space}`, () => {
    const { asFragment } = render(
      <Stack space={space}>
        <button />
        <button />
        <button />
      </Stack>
    )

    expect(asFragment()).toMatchSnapshot()

    expect(screen.getAllByRole('button')).toHaveLength(3)
  })
})
