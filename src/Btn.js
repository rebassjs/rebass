
// Experimental button component using Base component

import React from 'react'
import Base from './Base'
import theme from './theme'
import addContext from './util/add-context'

const Btn = ({ style, ...props }, { rebass }) => {
  const config = { ...theme, ...rebass }
  const { colors, borderRadius } = config

  const sx = {
    display: 'inline-block',
    padding: 8,
    border: 0,
    borderRadius,
    color: colors.white,
    backgroundColor: colors.primary
  }

  return (
    <Base
      {...props}
      tagName='button'
      componentName='Btn'
      className='Btn'
      style={sx}
      customStyle={style}
    />
  )
}

Btn.contextTypes = {
  rebass: React.PropTypes.object
}

export default Btn
