import React from 'react'
import { ThemeProvider } from 'styled-components'
import Root from './Root'
import defaultTheme from './theme'

export class Provider extends React.Component {
  render () {
    const {
      theme,
      ...props
    } = this.props

    return (
      <ThemeProvider theme={{ ...defaultTheme, ...theme }}>
        <Root {...props} />
      </ThemeProvider>
    )
  }
}

Provider.defaultProps = {
  theme: {}
}

Provider.displayName = 'Rebass.Provider'

export default Provider
