import React from 'react'
import { ThemeProvider } from 'theme-ui'
import { Box } from 'rebass'
import preset from '@rebass/preset'

export default props =>
  <ThemeProvider theme={preset}>
    <Box sx={{
      variant: 'styles.root'
    }}>
      {props.children}
    </Box>
  </ThemeProvider>
