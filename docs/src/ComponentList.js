import React from 'react'
import { createView, Link } from 'rrx'
import {
  Flex,
  Heading,
  BlockLink,
  Card,
  Divider,
  Pre,
} from 'rebass'
import { examples, components } from './examples'
import PageTitle from './PageTitle'
import Preview from './Preview'

const CompCard = props => (
  <Card p={2}>
    <Preview
      code={props.code}
      style={{
        height: 192,
        overflow: 'hidden'
      }}
    />
    <Divider color='gray2' />
    <Pre fontSize={0}>{props.name}</Pre>
  </Card>
)

const ComponentList = props => (
  <div>
    <PageTitle>
      {components.length} Components
    </PageTitle>
    <Flex
      flexWrap='wrap'
      my={4}
      mx={-2}>
      {components.map(name => (
        <BlockLink
          is={Link}
          href={'/components/' + name}
          key={name}
          px={2}
          pb={3}
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
