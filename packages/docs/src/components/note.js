import React from 'react'
import { Box } from 'rebass'

export default props =>
  <Box
    {...props}
    sx={{
      fontSize: 1,
      fontStyle: 'italic',
      p: 3,
      my: 4,
      bg: 'muted',
      borderRadius: 4,
      borderLeft: t => `8px solid ${t.colors.primary}`,
    }}
  />
