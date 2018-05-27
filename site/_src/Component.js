import React from 'react'
import {
  Flex,
  Box,
} from 'rebass'
import PageTitle from './PageTitle'
import Example from './Example'
import Pagination from './Pagination'
import { components } from './examples'

console.log('Component')

const Component = props => {
  const { name } = props.match.params
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
      <PageTitle>
        {name}
      </PageTitle>
      <Flex
        flexDirection='column'
        style={{
          minHeight: '70vh'
        }}>
        <Box flex='1 1 auto'>
          <Example name={name} />
        </Box>
        <Pagination
          previous={previous}
          next={next}
        />
      </Flex>
    </div>
  )
}

export default Component
