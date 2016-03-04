
import React from 'react'
import { Flex, Box } from 'reflexbox'
import {
  Banner,
  Heading,
  Text,
  Button
} from '../../src'

const Header = ({ toggleDrawer }) => (
  <Banner
    style={{
      paddingTop: 48,
      backgroundAttachment: 'fixed'
    }}
    backgroundImage='https://d262ilb51hltx0.cloudfront.net/max/2000/1*DZwdGMaeu-rvTroJYui6Uw.jpeg'
    onClick={toggleDrawer}>
    <Heading size={1} big children='Rebass Demo' />
    <Text children='Configurable example page' />
    <Box py={2}>
      <Button
        big
        onClick={toggleDrawer}
        children='Edit Configuration' />
    </Box>
  </Banner>
)

export default Header

