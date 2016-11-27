
import React from 'react'
import withRebass from './withRebass'
import classnames from 'classnames'

/** Arrow for use in dropdowns and other UI elements */

const Arrow = ({
  direction,
  children,
  className,
  style,
  theme,
  subComponentStyles,
  ...props
}) => {
  const cx = classnames('Arrow', className)

  const sx = {
    display: 'inline-block',
    width: 0,
    height: 0,
    marginLeft: '.5em',
    verticalAlign: 'middle',
    borderRight: '.3125em solid transparent',
    borderLeft: '.3125em solid transparent',
    borderTop: direction === 'down' ? '.4375em solid' : null,
    borderBottom: direction === 'up' ? '.4375em solid' : null,
    pointerEvents: 'none',
    ...style
  }

  return (
    <div
      {...props}
      className={cx}
      style={sx} />
  )
}

Arrow.propTypes = {
  /** Direction of arrow */
  direction: React.PropTypes.oneOf(['up', 'down'])
}

Arrow.defaultProps = {
  direction: 'down'
}

Arrow._name = 'Arrow'

export default withRebass(Arrow)

