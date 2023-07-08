import React from 'react'
import { render, screen } from '../../utils/testing'
import userEvent from '@testing-library/user-event'
import { TabBar, TabBarProps } from './index'

const DIRECTIONS: TabBarProps['direction'][] = ['horizontal', 'vertical']
const SIZES: TabBarProps['size'][] = ['sm', 'md', 'lg']

DIRECTIONS.forEach((direction) => {
  SIZES.forEach((size) => {
    test(`TabBar – ${direction}, ${size}`, async () => {
      const setCurrent = jest.fn()

      const props: TabBarProps = {
        tabs: ['One', 'Two', 'Three'],
        current: 'Two',
        setCurrent,
        direction,
        size
      }

      const { asFragment } = render(<TabBar {...props} />)
      expect(asFragment()).toMatchSnapshot()

      expect(screen.getAllByRole('button')).toHaveLength(3)
      expect(screen.getByText(props.tabs[0])).toBeInTheDocument()
      expect(screen.getByText(props.tabs[1])).toBeInTheDocument()
      expect(screen.getByText(props.tabs[2])).toBeInTheDocument()

      expect(setCurrent.mock.calls).toHaveLength(0)
      await userEvent.click(screen.getByText(props.tabs[0]))
      expect(setCurrent.mock.calls).toHaveLength(1)
      expect(setCurrent.mock.calls[0]).toStrictEqual([props.tabs[0]])

      await userEvent.click(screen.getByText(props.tabs[1]))
      expect(setCurrent.mock.calls).toHaveLength(2)
      expect(setCurrent.mock.calls[1]).toStrictEqual([props.tabs[1]])
    })
  })
})
