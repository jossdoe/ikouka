import React, { useState } from 'react'
import { TabBar, TabBarProps } from './index'

export default {
  title: 'TabBar',
  component: TabBar
}

const render = ({ current, setCurrent, ...rest }: TabBarProps) => {
  const [currentTab, setCurrenTab] = useState(current)
  return <TabBar current={currentTab} setCurrent={setCurrenTab} {...rest} />
}

export const Small = {
  render,
  args: {
    tabs: ['Tab One', 'Tab Two', 'Tab Three'],
    current: 'Tab One',
    size: 'sm'
  }
}

export const Medium = {
  render,
  args: {
    tabs: ['Tab One', 'Tab Two', 'Tab Three'],
    current: 'Tab One',
    size: 'md'
  }
}

export const Large = {
  render,
  args: {
    tabs: ['Tab One', 'Tab Two', 'Tab Three'],
    current: 'Tab One',
    size: 'lg'
  }
}
