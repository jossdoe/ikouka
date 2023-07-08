import React, { FC, HTMLAttributes } from 'react'
import cn from 'classnames'

export type TabBarProps = {
  tabs: string[]
  current: string
  setCurrent: (tab: string) => void
  direction?: 'horizontal' | 'vertical'
  size?: 'sm' | 'md' | 'lg'
} & HTMLAttributes<HTMLDivElement>

export const TabBar: FC<TabBarProps> = ({
  className,
  tabs,
  current,
  setCurrent,
  direction = 'horizontal',
  size = 'md',
  ...rest
}) => {
  const cssParent = cn({
    'inline-flex bg-gray-100 text-gray-600 rounded-lg overflow-hidden whitespace-nowrap':
      true,
    'flex-col': direction === 'vertical'
  })

  return (
    <div className={cssParent} {...rest}>
      {tabs.map((tab) => {
        const cssChild = cn({
          'px-3 py-1.5 text-sm': size === 'sm',
          'px-4 py-2 text-base': size === 'md',
          'px-6 py-2.5 text-lg': size === 'lg',
          'hover:bg-gray-200': tab !== current,
          'bg-blue-100 text-blue-600': tab === current
        })

        return (
          <button
            key={tab}
            className={cssChild}
            onClick={() => setCurrent(tab)}
          >
            {tab}
          </button>
        )
      })}
    </div>
  )
}
