import React from 'react'
import { render } from 'react-dom'
import App from './App'

const DEV = process.env.NODE_ENV !== 'production'
const props = {
  options: {
    basename: DEV ? null : '/rebass'
  }
}

render(<App {...props} />, app)
