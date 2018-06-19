import React from 'react'
import { Panel, Box } from '../src'

export default () =>
  <Panel m={3}>
    <Panel.Header>Panel.Header</Panel.Header>
    <Box p={2}>
      Panel
    </Box>
    <Panel.Footer>Panel.Footer</Panel.Footer>
  </Panel>
