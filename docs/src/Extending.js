import React from 'react'
import { createView } from 'rrx'
import src from 'raw-loader!../EXTENDING.md'
import Markdown from './Markdown'
import Pagination from './Pagination'

const Extending = props => (
  <div>
    <Markdown children={src} />
    <Pagination
      previous={{
        href: '/theming',
        name: 'Theming'
      }}
      next={{
        href: '/server-side-rendering',
        name: 'Server Side Rendering'
      }}
    />
  </div>
)

export default createView(Extending)
