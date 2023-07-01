import React, { FC, HTMLAttributes } from 'react'
import cn from 'classnames'

export type ButtonProps = {
  children: string
  variant: 'primary' | 'secondary' | 'text'
  href?: string
} & HTMLAttributes<HTMLButtonElement | HTMLAnchorElement>

/**
 * A button component.
 */
export const Button: FC<ButtonProps> = ({
  children,
  className,
  variant,
  href,
  ...rest
}) => {
  const css = cn({
    'px-4 py-2 rounded-lg': true,
    [className || '']: true,
    'bg-blue-100 text-blue-600 hover:bg-blue-200': variant === 'primary',
    'bg-gray-100 text-gray-600 hover:bg-gray-200': variant === 'secondary',
    'bg-transparent text-gray-600 hover:bg-gray-100': variant === 'text'
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
    <button className={css} {...rest}>
      {children}
    </button>
  )
}
