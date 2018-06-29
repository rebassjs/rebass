import React from 'react'
import { Provider } from '../src'

export default ({ children }) =>
  <Provider>
    {children}
  </Provider>
