import React, { FC, HTMLAttributes } from 'react'
import cn from 'classnames'

export type ButtonProps = {
  children: string
  variant?: 'primary' | 'secondary' | 'text'
  size?: 'sm' | 'md' | 'lg'
  href?: string
} & HTMLAttributes<HTMLButtonElement | HTMLAnchorElement>

/**
 * A button component.
 */
export const Button: FC<ButtonProps> = ({
  children,
  className,
  variant = 'primary',
  size = 'md',
  href,
  ...rest
}) => {
  const css = cn({
    'px-3 py-1.5 text-sm rounded-lg': size === 'sm',
    'px-4 py-2 text-base rounded-lg': size === 'md',
    'px-6 py-2.5 text-lg rounded-lg': size === 'lg',
    'bg-blue-100 text-blue-600 hover:bg-blue-200': variant === 'primary',
    'bg-gray-100 text-gray-600 hover:bg-gray-200': variant === 'secondary',
    'bg-transparent text-gray-600 hover:bg-gray-100': variant === 'text',
    [className || '']: true
  })

  if (href)
    return (
      <a
        className={css}
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        {...rest}
      >
        {children}
      </a>
    )

  return (
    <button className={css + ''} {...rest}>
      {children}
    </button>
  )
}
