import React from 'react'
import src from 'raw-loader!../SERVER_SIDE_RENDERING.md'
import Markdown from './Markdown'
import Pagination from './Pagination'

const ServerSide = props => (
  <div>
    <Markdown children={src} />
    <Pagination
      previous={{
        href: '/extending',
        name: 'Extending'
      }}
      next={{
        href: '/components',
        name: 'Components'
      }}
    />
  </div>
)

export default ServerSide
