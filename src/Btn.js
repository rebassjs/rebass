
// Experimental button component using Base component

import React from 'react'
import Base from './Base'
import Button from './Button'
import theme from './theme'
import addContext from './util/add-context'

const Btn = ({ style, ...props }, { rebass }) => {
  const config = { ...theme, ...rebass }
  const { colors, fontSizes } = config

  const sx = {
    fontFamily: 'inherit',
    fontSize: fontSizes[5],
    display: 'inline-block',
    padding: 8,
    border: 0,
    color: colors.white,
    backgroundColor: 'tomato'
  }

  return (
    <Base
      {...props}
      tagName={'button'}
      componentName='Btn'
      className='Btn'
      style={sx}
      customStyle={style}
    />
  )
}

Btn.propTypes = {
  /** Controls border radius */
  rounded: React.PropTypes.oneOfType([
    React.PropTypes.bool,
    React.PropTypes.oneOf([
      'top',
      'right',
      'bottom',
      'left'
    ])
  ])
}

Btn.defaultProps = {
  rounded: true
}

Btn.contextTypes = {
  rebass: React.PropTypes.object
}

export default Btn

