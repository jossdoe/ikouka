import { useMediaQuery } from './useMediaQuery'

type Breakpoints = {
  isSm: boolean
  isMd: boolean
  isLg: boolean
  isXl: boolean
  active: 'sm' | 'md' | 'lg' | 'xl'
}

/**
 * Get a set of boolean representing which breakpoint is active
 * and which breakpoints are inactive.
 *
 * Source: https://dev.to/justincy/4-patterns-for-responsive-props-in-react-39ak#responsive-props
 */
export function useBreakpoints() {
  const breakpoints: Breakpoints = {
    isSm: useMediaQuery('(max-width: 768px)'),
    isMd: useMediaQuery('(min-width: 769px) and (max-width: 1024px)'),
    isLg: useMediaQuery('(min-width: 1025px) and (max-width: 1280px)'),
    isXl: useMediaQuery('(min-width: 1281px)'),
    active: 'sm'
  }

  if (breakpoints.isSm) breakpoints.active = 'sm'
  if (breakpoints.isMd) breakpoints.active = 'md'
  if (breakpoints.isLg) breakpoints.active = 'lg'
  if (breakpoints.isXl) breakpoints.active = 'xl'

  return breakpoints
}
