import React from 'react'
import { Wrap } from './index'
import { StoryObj } from '@storybook/react'

export default {
  title: 'Wrap',
  component: Wrap
}

const render = (args: {}) => (
  <Wrap {...args}>
    {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map((value) => (
      <div key={value} className="bg-red-400 h-24 w-48" />
    ))}
  </Wrap>
)

export const ExtraSmall: StoryObj = {
  render,
  args: {
    space: 'xs'
  }
}

export const Small: StoryObj = {
  render,
  args: {
    space: 'sm'
  }
}

export const Medium: StoryObj = {
  render,
  args: {
    space: 'md'
  }
}

export const Large: StoryObj = {
  render,
  args: {
    space: 'lg'
  }
}

export const ExtraLarge: StoryObj = {
  render,
  args: {
    space: 'xl'
  }
}
