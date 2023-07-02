import React, { FC, HTMLAttributes } from 'react'
import cn from 'classnames'

export type BadgeProps = {
  children: string
  color?: 'gray' | 'green' | 'red' | 'purple'
  size?: 'md' | 'lg'
  variant?: 'filled' | 'outline'
} & HTMLAttributes<HTMLDivElement>

export const Badge: FC<BadgeProps> = ({
  children,
  className,
  color = 'gray',
  size = 'md',
  variant = 'filled',
  ...rest
}) => {
  const css = cn({
    'border uppercase font-semibold py-0.5 px-1.5 rounded': true,
    'text-xs': size === 'md',
    'text-sm': size === 'lg',
    'border-transparent bg-gray-100 text-gray-600':
      color === 'gray' && variant === 'filled',
    'border-transparent bg-green-100 text-green-600':
      color === 'green' && variant === 'filled',
    'border-transparent bg-red-100 text-red-600':
      color === 'red' && variant === 'filled',
    'border-transparent bg-violet-100 text-violet-600':
      color === 'purple' && variant === 'filled',
    'border-gray-300 bg-transparent text-gray-600':
      color === 'gray' && variant === 'outline',
    'border-green-300 bg-transparent text-green-600':
      color === 'green' && variant === 'outline',
    'border-red-300 bg-transparent text-red-600':
      color === 'red' && variant === 'outline',
    'border-violet-300 bg-transparent text-violet-600':
      color === 'purple' && variant === 'outline',
    [className || '']: true
  })

  return (
    <span className={css} {...rest}>
      {children}
    </span>
  )
}
