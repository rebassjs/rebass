
import React from 'react'
import classnames from 'classnames'
import withRebass from './withRebass'

/**
 * Inline-block element for adding space between elements
 */

const Space = ({
  x,
  auto,
  children,
  className,
  style,
  theme,
  subComponentStyles,
  ...props
}) => {
  const { scale } = theme

  const cx = classnames('Space', className)

  const sx = {
    display: 'inline-block',
    flex: auto ? '1 1 auto' : null,
    width: scale[x],
    ...style
  }

  return (
    <div
      {...props}
      className={cx}
      style={sx} />
  )
}

Space.propTypes = {
  /** Width of space based on the spacing scale */
  x: React.PropTypes.oneOf([1, 2, 3, 4]),
  /** Sets flex: 1 1 auto */
  auto: React.PropTypes.bool
}

Space.defaultProps = {
  x: 1
}

Space._name = 'Space'

export default withRebass(Space)

