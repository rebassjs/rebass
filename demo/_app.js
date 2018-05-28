import React from 'react'
import { Provider } from '../src'

export default ({ render }) =>
  <Provider>
    {render()}
  </Provider>
