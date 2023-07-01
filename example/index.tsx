import 'react-app-polyfill/ie11'
import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { Badge, Button } from 'ikouka'
import 'ikouka/dist/tailwind.css'

const App = () => {
  return (
    <div
      style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}
    >
      <Badge color="purple">Badge</Badge>
      <Button size="sm">Click me</Button>
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
