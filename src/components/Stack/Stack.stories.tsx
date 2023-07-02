import React from 'react'
import { Stack } from './index'
import { StoryObj } from '@storybook/react'

export default {
  title: 'Stack',
  component: Stack
}

const render = (args: {}) => (
  <Stack {...args}>
    <div className="bg-red-400 h-10 w-24" />
    <div className="bg-red-400 h-10 w-24" />
    <div className="bg-red-400 h-10 w-24" />
  </Stack>
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
