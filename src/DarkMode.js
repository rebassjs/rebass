import React from 'react'
import { ThemeProvider } from 'styled-components'
import { Box } from 'grid-styled'

import { invertLuminance } from './colors'
import defaultTheme from './theme'

export const invertTheme = (theme = defaultTheme) => {
  const { colors = {}, ...rest } = theme
  const next = Object.keys(colors)
    .reduce((a, key) => {
      a[key] = invertLuminance(colors[key])
      return a
    }, {})

  return {
    ...rest,
    colors: next
  }
}

export class DarkMode extends React.Component {
  static defaultProps = {
    color: 'black',
    bg: 'white'
  }

  render () {
    return (
      <ThemeProvider theme={invertTheme}>
        <Box {...this.props} />
      </ThemeProvider>
    )
  }
}

export default DarkMode
