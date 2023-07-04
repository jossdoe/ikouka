# ikouka

**ikouka** is a component library for prototyping React-apps without the hassle of recreating the same basic components all over again.

## Getting Started

First install the package:

```bash
npm install ikouka
```

Next, at the base of your app include the CSS:

```js
import 'ikouka/dist/tailwind.css'
```

Then import and use the components:

```js
import { Button } from 'ikouka'
```

## Documentation

### Components

A storybook with all components and their props is available [here](https://ikouka.vercel.app/).

### Hooks

#### useMediaQuery(query: string)

Takes in a media query as a string-value and returns a boolean indicating whether the media query is active.

```js
import { useMediaQuery } from 'ikouka'

const isSmallScreen = useMediaQuery('(max-width: 768px)')
const isMediumScreen = useMediaQuery(
  '(min-width: 769px) and (max-width: 1024px)'
)
const isLargeScreen = useMediaQuery('(min-width: 1025px)')
```

#### useBreakpoints()

Returns an object of four booleans for pre-defined breakpoint-sizes and an 'active'-Property that shows the currently active breakpoint as a string.

The built-in breakpoint-queries are:

- sm: (max-width: 768px)
- md: (min-width: 769px) and (max-width: 1024px)
- lg: (min-width: 1025px) and (max-width: 1280px)
- xl: (min-width: 1281px)

```js
import { useBreakpoints } from 'ikouka'

const { isSm, isMd, isLg, isXl, active } = useBreakpoints()
```

#### useBreakpointValues({ sm, md, lg, xl })

Takes in an object of values for each breakpoint and returns the value for the one that's currently active.

All breakpoint-values must be explicitly defined, but they are allowed to be `undefined`. (If the value for the currently active breakpoint is `undefined`, the hook will also return `undefined`.)

```jsx
import { useBreakpointValues } from 'ikouka'

const ResponsiveButton = () => {
  const size = useBreakpointValues({
    sm: 'sm',
    md: 'sm',
    lg: 'md',
    xl: 'lg'
  })

  return <Button size={size}>Click me</Button>
}
```
