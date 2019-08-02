import { jsx } from 'theme-ui'
import { Box } from '@rebass/grid'

export const Root = props =>
  jsx(Box, {
    ...props,
    sx: {
      variant: 'styles.root',
      ...props.sx,
    }
  })

