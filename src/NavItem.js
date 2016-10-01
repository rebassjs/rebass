
import React from 'react'
import classnames from 'classnames'
import withRebass from './withRebass'

/**
 * Link for use in navigation. Inherits color
 */

const NavItem = ({
  small,
  active,
  baseRef,
  is,
  className,
  style,
  theme,
  subComponentStyles,
  ...props
}) => {
  const { fontSizes, scale, bold } = theme

  const cx = classnames('NavItem', className)

  const activeStyle = active ? subComponentStyles.active : {}

  const sx = {
    fontSize: small ? fontSizes[6] : fontSizes[5],
    fontWeight: bold,
    lineHeight: '1rem',
    textDecoration: 'none',
    display: 'flex',
    alignItems: 'center',
    alignSelf: 'stretch',
    paddingTop: small ? scale[1] / 2 : scale[1],
    paddingBottom: small ? scale[1] / 2 : scale[1],
    paddingLeft: scale[1],
    paddingRight: scale[1],
    color: 'inherit',
    cursor: 'pointer',
    ...style,
    ...activeStyle
  }

  const Comp = is || 'a'

  return (
    <Comp
      {...props}
      ref={baseRef}
      className={cx}
      style={sx} />
  )
}

NavItem.propTypes = {
  /** Sets active styles */
  active: React.PropTypes.bool,
  /** Sets a smaller font size for compact UI */
  small: React.PropTypes.bool,
  /** Adds a ref to the link element */
  baseRef: React.PropTypes.func
}

NavItem._name = 'NavItem'

export default withRebass(NavItem)

