import React from 'react'
import { createView } from 'rrx'
import src from 'raw-loader!../PROPS.md'
import Markdown from './Markdown'

const Props = props => (
  <Markdown children={src} />
)

export default createView(Props)
