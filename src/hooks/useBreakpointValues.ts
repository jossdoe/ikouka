import { useBreakpoints } from './useBreakpoints'

/**
 * Define values for each breakpoint and have the corresponding value
 * to the currently active breakpoint returned.
 */
export function useBreakpointValues({
  sm,
  md,
  lg,
  xl
}: Record<'sm' | 'md' | 'lg' | 'xl', any>) {
  const { isSm, isMd, isLg, isXl } = useBreakpoints()

  if (isSm) return sm
  if (isMd) return md
  if (isLg) return lg
  if (isXl) return xl
}
