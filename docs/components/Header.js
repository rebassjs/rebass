
import React from 'react'
import { Flex, Box } from 'reflexbox'
import {
  Container,
  NavItem,
  PageHeader,
  Pre,
  Space,
  Toolbar
} from '../../src'

import CarbonAd from './CarbonAd'
import TweetButton from './TweetButton'
import GithubButton from './GithubButton'
import TravisBadge from './TravisBadge'

const Header = ({ version, description, components, ...props }) => {
  return (
    <div>
      <Toolbar style={{ backgroundColor: 'black' }}>
        <NavItem href='http://jxnblk.com/rebass' children='Rebass' />
        <NavItem href='http://jxnblk.com/rebass/demo' children='Demo' />
        <Space auto />
        <NavItem href='https://github.com/jxnblk/rebass' children='GitHub' />
        <NavItem href='https://npmjs.com/package/rebass' children='npm' />
      </Toolbar>
      <Container>
        <PageHeader
          heading='Rebass'
          description={`${components.length} ${description} [v${version}]`}>
          <CarbonAd />
        </PageHeader>
        <Box pb={3}>
          <Flex align='center'>
            <TravisBadge />
            <Space />
            <TweetButton text={`Rebass: ${description}`} />
            <Space />
            <GithubButton />
          </Flex>
        </Box>
      </Container>
    </div>
  )
}

export default Header

