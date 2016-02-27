
import React from 'react'
import theme from './theme'

/**
 * Styled box with border
 */

const Card = ({ width, style, ...props }, { rebass }) => {
  const config = { ...theme, ...rebass }
  const cardStyle = { ...theme.Card, ...(rebass ? rebass.Card : {}), ...style }
  const { scale, borderRadius, borderColor } = config

  const sx = {
    display: 'flex',
    width,
    flexDirection: 'column',
    padding: scale[1],
    marginBottom: scale[2],
    borderRadius,
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor,
    overflow: 'hidden',
    ...cardStyle
  }

  return (
    <div
      {...props}
      className='Card'
      style={sx} />
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

