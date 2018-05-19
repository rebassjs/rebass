import React from 'react'
import { theme, Provider, Box } from './src'

export default {
  theme,
  Provider: props => (
    <Provider {...props}>
      {props.children}
    </Provider>
  )
}
