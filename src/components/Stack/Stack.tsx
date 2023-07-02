import React, { FC, HTMLAttributes, ReactNode } from 'react'
import cn from 'classnames'

export type StackProps = {
  children: ReactNode
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl'
} & HTMLAttributes<HTMLDivElement>

/**
 * Takes several children and consistently spaces them out vertically.
 */
export const Stack: FC<StackProps> = ({
  children,
  className,
  size = 'md',
  ...rest
}) => {
  const css = cn({
    'space-y-1': size === 'xs',
    'space-y-2': size === 'sm',
    'space-y-4': size === 'md',
    'space-y-6': size === 'lg',
    'space-y-8': size === 'xl',
    [className || '']: true
  })

  return (
    <div className={css} {...rest}>
      {children}
    </div>
  )
}
