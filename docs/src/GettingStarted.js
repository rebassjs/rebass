import React from 'react'
import { createView } from 'rrx'
import Markdown from './Markdown'
import src from 'raw-loader!../GETTING_STARTED.md'

const GettingStarted = props => (
  <div>
    <Markdown children={src} />
  </div>
)

export default createView(GettingStarted)
