
import React from 'react'
import classnames from 'classnames'
import withRebass from './withRebass'

/**
 * Fixed positioned overlay for use with modal dialogs
 */

const Overlay = ({
  open,
  dark,
  fullWidth,
  box,
  onDismiss,
  children,
  className,
  style,
  theme,
  subComponentStyles,
  ...props
}) => {
  const { zIndex, scale, colors, borderRadius } = theme

  const cx = classnames('Overlay', className)

  const innerStyle = {
    padding: scale[3],
    backgroundColor: colors.white,
    borderRadius,
    ...subComponentStyles.box
  }

  const sx = {
    root: {
      position: 'fixed',
      top: 0,
      right: 0,
      bottom: 0,
      left: 0,
      zIndex: zIndex[2],
      display: open ? 'flex' : 'none',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      ...subComponentStyles.background
    },
    dismiss: {
      position: 'fixed',
      top: 0,
      right: 0,
      bottom: 0,
      left: 0,
      backgroundColor: dark ? colors.black : colors.white,
      opacity: 0.875,
      ...subComponentStyles.dismiss
    },
    inner: {
      position: 'relative',
      zIndex: zIndex[1],
      minWidth: 320,
      width: fullWidth ? '100%' : null,
      ...style,
      ...(box ? innerStyle : {})
    }
  }

  return (
    <div
      className={cx}
      style={sx.root}>
      <div style={sx.dismiss}
        onClick={onDismiss} />
      <div
        {...props}
        style={sx.inner}
        children={children} />
    </div>
  )
}

Overlay.propTypes = {
  /** Shows and hides overlay */
  open: React.PropTypes.bool,
  /** Sets dark transparent overlay style */
  dark: React.PropTypes.bool,
  /** Sets padding and background white for the content container */
  box: React.PropTypes.bool,
  /** Sets content container full width */
  fullWidth: React.PropTypes.bool,
  /** Click event callback for the Overlay background */
  onDismiss: React.PropTypes.func
}

Overlay.defaultProps = {
  open: false,
  dark: true,
  onDismiss: function () {}
}

Overlay._name = 'Overlay'

export default withRebass(Overlay)

