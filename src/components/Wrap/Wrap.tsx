import React, { FC, HTMLAttributes, ReactNode } from 'react'
import cn from 'classnames'

export type WrapProps = {
  children: ReactNode
  space?: 'xs' | 'sm' | 'md' | 'lg' | 'xl'
} & HTMLAttributes<HTMLDivElement>

/**
 * Takes several children and consistently spaces them out horizontally and vertically.
 */
export const Wrap: FC<WrapProps> = ({
  children,
  className,
  space = 'md',
  ...rest
}) => {
  const css = cn({
    'flex flex-wrap': true,
    'gap-0.5': space === 'xs',
    'gap-2': space === 'sm',
    'gap-4': space === 'md',
    'gap-6': space === 'lg',
    'gap-10': space === 'xl',
    [className || '']: true
  })

  return (
    <div className={css} {...rest}>
      {children}
    </div>
  )
}
