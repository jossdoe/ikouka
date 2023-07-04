import { useEffect, useState } from 'react'

/**
 * Returns a boolean indicating whether a given media query is active
 *
 * Source: https://dev.to/justincy/4-patterns-for-responsive-props-in-react-39ak#responsive-props
 */
export function useMediaQuery(query: string) {
  const [matches, setMatches] = useState(false)

  useEffect(() => {
    const mediaQuery = window.matchMedia(query)
    setMatches(mediaQuery.matches)

    const handler = (event: MediaQueryListEvent) => setMatches(event.matches)

    mediaQuery.addEventListener('change', handler)
    return () => mediaQuery.removeEventListener('change', handler)
  }, [])

  return matches
}
