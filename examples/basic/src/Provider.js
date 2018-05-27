import React from 'react'
import { Provider as RebassProvider } from 'rebass'
import theme from './theme'

const Provider = props =>
  <RebassProvider {...props} />

Provider.defaultProps = {
  theme
}

export default Provider
