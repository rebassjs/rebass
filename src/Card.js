
import React from 'react'
import classnames from 'classnames'
import withRebass from './withRebass'

/**
 * Styled box with border
 */

const Card = ({
  width,
  className,
  style,
  theme,
  subComponentStyles,
  ...props
}, { rebass }) => {
  const { scale, borderColor, borderRadius } = theme

  const cx = classnames('Card', className)
  const sx = {
    width,
    padding: scale[1],
    marginBottom: scale[2],
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor,
    borderRadius,
    overflow: 'hidden',
    ...style
  }

  return (
    <div
      {...props}
      className={cx}
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

Card._name = 'Card'

export default withRebass(Card)

