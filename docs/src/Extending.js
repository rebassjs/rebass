import React from 'react'
import { createView } from 'rrx'
import src from 'raw-loader!../EXTENDING.md'
import Markdown from './Markdown'

const Extending = props => (
  <Markdown children={src} />
)

export default createView(Extending)
