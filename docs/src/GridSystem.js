import React from 'react'
import { createView } from 'rrx'
import src from 'raw-loader!../GRID_SYSTEM.md'
import Markdown from './Markdown'

const GridSystem = props => (
  <Markdown children={src} />
)

export default createView(GridSystem)
