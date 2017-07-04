import React from 'react'
import { connect } from 'funcup'
import { Flex, Box } from 'grid-styled'
import Rebass, {
  Heading,
  BlockLink,
  NavLink,
  ButtonOutline,
} from 'rebass'
import Live from './Live'
import examples from './examples'
import { toggleXray } from './updaters'

const Example = props => {
  const code = examples[props.name]

  return (
    <Box
      id={props.name}
      my={5}>
      <Flex my={3} align='center'>
        <Heading>
          <BlockLink href={'#' + props.name}>
            {props.name}
          </BlockLink>
        </Heading>
        <NavLink
          ml='auto'
          onClick={e => props.update(toggleXray)}
          children='X-Ray'
        />
      </Flex>
      <Live code={code} />
    </Box>
  )
}

export default connect()(Example)
