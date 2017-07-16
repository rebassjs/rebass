import React from 'react'
import { createView, Link } from 'rrx'
import {
  Heading,
  NavLink,
} from 'rebass'
import { components } from './examples'

const ComponentList = props => (
  <div>
    <Heading>
      {components.length} Components
    </Heading>
    {components.map(name => (
      <NavLink
        key={name}
        is={Link}
        href={'/components/' + name}
        children={name}
      />
    ))}
  </div>
)

export default createView(ComponentList)
