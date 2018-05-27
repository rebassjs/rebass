import React from 'react'
import src from 'raw-loader!../THEMING.md'
import Markdown from './Markdown'
import Pagination from './Pagination'

const Theming = props => (
  <div>
    <Markdown children={src} />
    <Pagination
      previous={{
        href: '/grid-system',
        name: 'Grid System'
      }}
      next={{
        href: '/extending',
        name: 'Extending'
      }}
    />
  </div>
)

export default Theming
