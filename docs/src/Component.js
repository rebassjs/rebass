import React from 'react'
import { createView } from 'rrx'
import Example from './Example'
import Pagination from './Pagination'
import { components } from './examples'

const Component = props => {
  const { name } = props.params
  const index = components.indexOf(name)
  const previousName = components[index - 1]
  const nextName = components[index + 1]

  const previous = previousName ? {
    name: previousName,
    href: '/components/' + previousName
  } : null

  const next = nextName ? {
    name: nextName,
    href: '/components/' + nextName
  } : null

  return (
    <div>
      <Example name={name} />
      <Pagination
        previous={previous}
        next={next}
      />
    </div>
  )
}

export default createView(Component)
