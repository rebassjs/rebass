
import React from 'react'
import { Flex, Box } from 'reflexbox'
import {
  Divider,
  Donut,
  Section,
  SectionHeader,
  Stat,
} from '../../src'

const DataDemo = ({ repo, version, ...props }) => (
  <Section>
    <SectionHeader heading='Stats' />
    <Flex
      wrap
      gutter={2}
      justify='space-between'
      align='center'>
      <Donut
        color='info'
        m={2}
        size={256}
        strokeWidth={16}
        value={5/8} />
      <Donut
        color='green'
        m={2}
        size={192}
        strokeWidth={16}
        value={7/8} />
      <Donut
        color='error'
        m={2}
        size={192}
        strokeWidth={16}
        value={1/16} />
    </Flex>
    <Divider />
    <Flex
      wrap
      justify='space-between'
      gutter={2}
      align='center'>
      <Stat
        m={2}
        label='Stars'
        color='orange'
        value={repo.stargazers_count || '...'} />
      <Stat
        m={2}
        label='Forks'
        value={repo.forks_count || '...'} />
      <Stat
        m={2}
        label='Watchers'
        value={repo.watchers_count || '...'} />
      <Stat
        m={2}
        label='Version'
        value={version} />
    </Flex>
  </Section>
)

export default DataDemo

