
import React from 'react'
import theme from './theme'

/**
 * Styled box with border
 */

const Card = ({ width, style, ...props }, { rebass }) => {
  const config = { ...theme, ...rebass }
  const { scale, borderRadius, borderColor } = config

  return (
    <div
      {...props}
      className='Card'
      style={{
        display: 'flex',
        width,
        flexDirection: 'column',
        padding: scale[1],
        borderRadius,
        borderWidth: 1,
        borderStyle: 'solid',
        borderColor,
        ...style
      }} />
  )
}

Card.propTypes = {
  /** Width of card */
  width: React.PropTypes.oneOfType([
    React.PropTypes.number,
    React.PropTypes.string
  ])
}

Card.contextTypes = {
  rebass: React.PropTypes.object
}

export default Card

