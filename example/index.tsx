import 'react-app-polyfill/ie11'
import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { Badge, Button, Stack } from 'ikouka'
import 'ikouka/dist/tailwind.css'

const App = () => {
  return (
    <Stack size="sm">
      <div>
        <Badge color="purple">Badge</Badge>
      </div>
      <div>
        <Button size="sm">Click me</Button>
      </div>
    </Stack>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
