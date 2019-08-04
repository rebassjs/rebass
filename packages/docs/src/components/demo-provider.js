import React, { useState } from 'react'
import { ThemeProvider } from 'theme-ui'
import { Box, Flex } from 'rebass'
import * as themeui from '@theme-ui/presets'
import merge from 'lodash.merge'
import rebass from '@rebass/preset'

const presets = {
  ...themeui,
  rebass,
}

const themes = [
  'rebass',
  ...Object.keys(presets)
]

export default props => {
  const [ theme, setTheme ] = useState('preset')

  const demoTheme = merge({}, rebass, presets[theme])

  return (
    <div>
      <Flex mb={4}>
        <Box as='label'>
          Theme:
          {' '}
          <select
            id='theme'
            name='theme'
            value={theme}
            onChange={e => {
              setTheme(e.target.value)
            }}>
            {themes.map(name => (
              <option key={name}>{name}</option>
            ))}
          </select>
        </Box>
      </Flex>
      <ThemeProvider theme={demoTheme}>
        {props.children}
      </ThemeProvider>
    </div>
  )
}
