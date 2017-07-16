import React from 'react'
import { createView } from 'rrx'
import src from 'raw-loader!../SERVER_SIDE_RENDERING.md'
import Markdown from './Markdown'

const ServerSide = props => (
  <Markdown children={src} />
)

export default createView(ServerSide)
