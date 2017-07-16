import React from 'react'
import { Flex, Container } from 'rebass'
import { NavLink } from 'rebass'

const Footer = props => (
  <footer>
    <Container>
      <Flex mx={-2} mt={5}>
        <NavLink
          href='http://jxnblk.com/rebass'
          children='Rebass'
        />
        <NavLink
          href='https://github.com/jxnblk/rebass'
          children='GitHub'
        />
        <NavLink
          ml='auto'
          href='http://jxnblk.com'
          children='Made by Jxnblk'
        />
      </Flex>
    </Container>
  </footer>
)

export default Footer
