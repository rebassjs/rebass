
import React from 'react'
import classnames from 'classnames'
import withRebass from './withRebass'

/**
 * Minimal footer component with top border
 */

const Footer = ({
  className,
  style,
  theme,
  subComponentStyles,
  ...props
}) => {
  const { scale, fontSizes, borderColor } = theme

  const cx = classnames('Footer', className)

  const sx = {
    display: 'flex',
    flexWrap: 'wrap',
    alignItems: 'center',
    marginTop: scale[3],
    paddingTop: scale[3],
    paddingBottom: scale[3],
    fontSize: fontSizes[5],
    borderTopWidth: 1,
    borderTopStyle: 'solid',
    borderTopColor: borderColor,
    ...style
  }

  return (
    <footer
      {...props}
      className={cx}
      style={sx} />
  )
}

Footer._name = 'Footer'

export default withRebass(Footer)

