
import PropTypes from 'prop-types'
import React from 'react'
import Base from './Base'
import config from './config'

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
  ...props
}, { rebass }) => {
  const { zIndex, scale, colors, borderRadius } = { ...config, ...rebass }

  const innerStyle = {
    padding: scale[3],
    backgroundColor: colors.white,
    borderRadius
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
      justifyContent: 'center'
    },
    dismiss: {
      position: 'fixed',
      top: 0,
      right: 0,
      bottom: 0,
      left: 0,
      backgroundColor: dark ? colors.black : colors.white,
      opacity: 0.875
    },
    inner: {
      position: 'relative',
      zIndex: zIndex[1],
      minWidth: 320,
      width: fullWidth ? '100%' : null,
      overflow: 'scroll',
      ...(box ? innerStyle : {})
    }
  }

  return (
    <div
      className='Overlay'
      style={sx.root}>
      <div style={sx.dismiss}
        onClick={onDismiss} />
      <Base {...props}
        baseStyle={sx.inner}
        children={children} />
    </div>
  )
}

Overlay.propTypes = {
  /** Shows and hides overlay */
  open: PropTypes.bool,
  /** Sets dark transparent overlay style */
  dark: PropTypes.bool,
  /** Sets padding and background white for the content container */
  box: PropTypes.bool,
  /** Sets content container full width */
  fullWidth: PropTypes.bool,
  /** Click event callback for the Overlay background */
  onDismiss: PropTypes.func
}

Overlay.defaultProps = {
  open: false,
  dark: true,
  onDismiss: function () {}
}

Overlay.contextTypes = {
  rebass: PropTypes.object
}

export default Overlay

