import React from 'react'
import { Link } from 'rrx'
import {
  Flex,
  ButtonOutline
} from 'rebass'

const Pagination = props => (
  <Flex>
    {props.previous && (
      <ButtonOutline
        is={Link}
        href={props.previous.href}
        children={props.previous.name}
      />
    )}
    {props.next && (
      <ButtonOutline
        is={Link}
        ml='auto'
        href={props.next.href}
        children={props.next.name}
      />
    )}
  </Flex>
)

export default Pagination
