import React from 'react'
import { ThemeProvider, preset } from 'rebass'

export default props =>
  <ThemeProvider theme={preset}>
    {props.children}
  </ThemeProvider>
