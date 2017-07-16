import React from 'react'
import { Link } from 'rrx'
import { Chevron } from 'reline'
import {
  Flex,
  NavLink,
  Text,
} from 'rebass'

const Pagination = props => (
  <Flex my={[ 3, 5 ]}>
    {props.previous && (
      <NavLink
        is={Link}
        href={props.previous.href}>
        <Chevron left size={16} />
        <Text bold ml={2}>
          {props.previous.name}
        </Text>
      </NavLink>
    )}
    {props.next && (
      <NavLink
        is={Link}
        ml='auto'
        href={props.next.href}>
        <Text bold mr={2}>
          {props.next.name}
        </Text>
        <Chevron right size={16} />
      </NavLink>
    )}
  </Flex>
)

export default Pagination
