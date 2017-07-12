import React from 'react'
import cleanProps from './clean-props'

const Tag = tag => {
  const Base = props => {
    const isEl = typeof tag === 'string'
    const Comp = isEl ? (props.is || tag) : tag
    const next = isEl ? cleanProps(props) : props

    if (isEl) next.is = null

    return <Comp {...next} />
  }

  return Base
}

export default Tag
