import React from 'react'
import { render, screen } from '../../utils/testing'
import { Wrap, WrapProps } from './index'

const SPACES: WrapProps['space'][] = ['xs', 'sm', 'md', 'lg', 'xl', undefined]

SPACES.forEach((space) => {
  test(`Wrap - ${space}`, () => {
    const { asFragment } = render(
      <Wrap space={space}>
        <button />
        <button />
        <button />
      </Wrap>
    )

    expect(asFragment()).toMatchSnapshot()

    expect(screen.getAllByRole('button')).toHaveLength(3)
  })
})
