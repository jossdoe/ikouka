import 'react-app-polyfill/ie11'
import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { Badge, Button, Stack } from 'ikouka'
import 'ikouka/dist/tailwind.css'

const App = () => {
  return (
    <div
      style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}
    >
      <Stack>
        <Badge color="purple">Badge</Badge>
        <Button size="sm">Click me</Button>
      </Stack>
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
