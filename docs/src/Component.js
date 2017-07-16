import React from 'react'
import { createView } from 'rrx'
import {
  Flex,
  Box,
} from 'rebass'
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
    <Flex
      column
      style={{
        minHeight: '80vh'
      }}>
      <Box flex='1 1 auto'>
        <Example name={name} />
      </Box>
      <Pagination
        previous={previous}
        next={next}
      />
    </Flex>
  )
}

export default createView(Component)
