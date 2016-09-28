
import React from 'react'
import classnames from 'classnames'
import withRebass from './withRebass'
import Button from './Button'

/**
 * A circular button suited for use with icons
 */

const ButtonCircle = ({
  size,
  children,
  className,
  style,
  theme,
  subComponentStyles,
  ...props
}) => {
  const { scale } = theme

  const cx = classnames('ButtonCircle', className)

  const sx = {
    root: {
      fontSize: 'inherit',
      width: size || scale[3],
      height: size || scale[3],
      padding: 0,
      borderRadius: 99999,
      ...style
    },
    inner: {
      display: 'flex',
      alignItems: 'center',
      height: '100%',
      justifyContent: 'center',
      ...subComponentStyles.inner
    }
  }

  return (
    <Button
      {...props}
      className={cx}
      style={sx.root}>
      <div style={sx.inner}>
        {children}
      </div>
    </Button>
  )
}

ButtonCircle.propTypes = {
  /** Pass an href prop to make the ButtonCircle an <a> tag instead of a <button> */
  href: React.PropTypes.string,
  /** Sets width and height of button */
  size: React.PropTypes.number
}

ButtonCircle._name = 'ButtonCircle'

export default withRebass(ButtonCircle)

