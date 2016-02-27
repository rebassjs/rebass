
import React from 'react'
import { Flex, Box } from 'reflexbox'
import {
  NavItem,
  Panel,
  PanelHeader,
  Section,
  SectionHeader
} from '../../src'
import Permutations from './Permutations'
import Example from './Example'
import PropsTable from './PropsTable'

const ComponentDoc = ({ name, description, example, Component, ...props }) => {
  return (
    <Section key={name} id={name}>
      <SectionHeader
        heading={name}
        description={description || '☞ NEEDS DESCRIPTION'} />
      <Panel>
        <PanelHeader>
          Example
        </PanelHeader>
        {example && <Example example={example} />}
        <Permutations
          name={name}
          description={description}
          Component={Component}
          {...props} />
      </Panel>
      <PropsTable props={props.props} />
      <Box pt={2}>
        <Flex gutter={1}>
          <Box auto />
          <NavItem small href='#' children='Back to Top' />
        </Flex>
      </Box>
    </Section>
  )
}

export default ComponentDoc

