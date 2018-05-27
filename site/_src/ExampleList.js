import React from 'react'
import {
  Container,
} from 'rebass'
import Example from './Example'
import { components } from './examples'

const ExampleList = props => (
  <div>
    {components.map(name => (
      <Example
        key={name}
        name={name}
      />
    ))}
  </div>
)

export default ExampleList
