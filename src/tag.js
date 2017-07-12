import React from 'react'
import cleanProps from './clean-props'

const tag = type => {
  const Base = props => {
    const isEl = typeof type === 'string'
    const Comp = isEl ? (props.is || type) : type
    const next = isEl ? cleanProps(props) : props

    if (isEl) next.is = null

    return <Comp {...next} />
  }

  return Base
}

export default tag
