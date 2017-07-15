import React from 'react'
import { createView } from 'rrx'
import Example from './Example'

const Component = props => {
  const { name } = props.params
  return (
    <div>
      <Example name={name} />
    </div>
  )
}

export default createView(Component)
