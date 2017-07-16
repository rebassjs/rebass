import React from 'react'
import { createView } from 'rrx'
import src from 'raw-loader!../THEMING.md'
import Markdown from './Markdown'

const Theming = props => (
  <Markdown children={src} />
)

export default createView(Theming)
