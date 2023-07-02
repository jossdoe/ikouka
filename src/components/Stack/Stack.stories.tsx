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
    size: 'xs'
  }
}

export const Small: StoryObj = {
  render,
  args: {
    size: 'sm'
  }
}

export const Medium: StoryObj = {
  render,
  args: {
    size: 'md'
  }
}

export const Large: StoryObj = {
  render,
  args: {
    size: 'lg'
  }
}

export const ExtraLarge: StoryObj = {
  render,
  args: {
    size: 'xl'
  }
}
