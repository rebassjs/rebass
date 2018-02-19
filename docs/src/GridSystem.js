import React from 'react'
import src from 'raw-loader!../GRID_SYSTEM.md'
import Markdown from './Markdown'
import Pagination from './Pagination'

const GridSystem = props => (
  <div>
    <Markdown children={src} />
    <Pagination
      previous={{
        href: '/props',
        name: 'Props'
      }}
      next={{
        href: '/theming',
        name: 'Theming'
      }}
    />
  </div>
)

export default GridSystem
