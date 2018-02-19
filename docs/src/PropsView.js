import React from 'react'
import src from 'raw-loader!../PROPS.md'
import Markdown from './Markdown'
import Pagination from './Pagination'

const Props = props => (
  <div>
    <Markdown children={src} />
    <Pagination
      previous={{
        href: '/getting-started',
        name: 'Getting Started'
      }}
      next={{
        href: '/grid-system',
        name: 'Grid System'
      }}
    />
  </div>
)

export default Props
