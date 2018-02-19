import React from 'react'
import { createView, Link } from 'rrx'
import {
  Flex,
  Box,
  Heading,
  BlockLink,
  Card,
  Border,
  Divider,
  Pre,
} from 'rebass'
import { examples, components } from './examples'
import PageTitle from './PageTitle'
import Preview from './Preview'

const CompCard = props => (
  <Box px={2} mb={4}>
    <Preview
      code={props.code}
      style={{
        height: 192,
        overflow: 'hidden'
      }}
    />
    <Divider my={1} />
    <Pre fontSize={0}>{props.name}</Pre>
  </Box>
)

const ComponentList = props => (
  <div>
    <PageTitle>
      {components.length} Components
    </PageTitle>
    <Flex
      flexWrap='wrap'
      my={4}>
      {components.map(name => (
        <BlockLink
          is={Link}
          href={'/components/' + name}
          key={name}
          width={[ 1/2, 1/2, 1/3, 1/4 ]}>
          <CompCard
            name={name}
            code={examples[name]}
          />
        </BlockLink>
      ))}
    </Flex>
  </div>
)

export default createView(ComponentList)
