import React from 'react'
import { createView } from 'rrx'
import src from 'raw-loader!../PROPS.md'
import Markdown from './Markdown'

const Props = props => (
  <Markdown>
    {src}
  </Markdown>
)

export default createView(Props)
