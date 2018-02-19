import React from 'react'
import { Link } from 'react-router-dom'
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
        to={props.previous.href}>
        <Chevron left size={16} />
        <Text fontWeight='bold' ml={2}>
          {props.previous.name}
        </Text>
      </NavLink>
    )}
    {props.next && (
      <NavLink
        is={Link}
        ml='auto'
        to={props.next.href}>
        <Text bold mr={2}>
          {props.next.name}
        </Text>
        <Chevron right size={16} />
      </NavLink>
    )}
  </Flex>
)

export default Pagination
