import React from 'react'
import { connect } from 'refunk'
import Rebass, {
  Flex,
  Box,
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
    <div>
      <Live code={code} />
      <NavLink
        f={0}
        onClick={e => props.update(toggleXray)}
        children='X-Ray'
      />
    </div>
  )
}

export default connect()(Example)
