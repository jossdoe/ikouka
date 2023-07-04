import 'react-app-polyfill/ie11'
import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { Badge, Button, Stack, Wrap, useBreakpointValues } from 'ikouka'
import 'ikouka/dist/tailwind.css'

const App = () => {
  const color = useBreakpointValues({
    sm: 'purple',
    md: 'red',
    lg: 'green',
    xl: 'gray'
  })

  return (
    <Stack space="lg">
      <div>
        <Badge color={color}>Badge</Badge>
      </div>
      <div>
        <Button size="sm">Click me</Button>
      </div>
      <Wrap space="lg">
        {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map((value) => (
          <div
            key={value}
            style={{ height: '58px', width: '100px', background: 'red' }}
          />
        ))}
      </Wrap>
    </Stack>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
