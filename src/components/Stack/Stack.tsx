import React, { FC, HTMLAttributes, ReactNode } from 'react'
import cn from 'classnames'

export type StackProps = {
  children: ReactNode
  space?: 'xs' | 'sm' | 'md' | 'lg' | 'xl'
} & HTMLAttributes<HTMLDivElement>

/**
 * Takes several children and consistently spaces them out vertically.
 */
export const Stack: FC<StackProps> = ({
  children,
  className,
  space = 'md',
  ...rest
}) => {
  const css = cn({
    'space-y-1': space === 'xs',
    'space-y-2': space === 'sm',
    'space-y-4': space === 'md',
    'space-y-6': space === 'lg',
    'space-y-8': space === 'xl',
    [className || '']: true
  })

  return (
    <div className={css} {...rest}>
      {children}
    </div>
  )
}
