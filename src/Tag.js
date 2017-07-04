import React from 'react'
import { removeProps } from 'styled-system'

const Tag = tag => {
  const Base = props => {
    const Comp = typeof tag === 'string' ? (props.is || tag) : tag
    const next = removeProps(props)

    if (typeof tag === 'string') delete next.is

    return <Comp {...next} />
  }

  return Base
}

export default Tag
