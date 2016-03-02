
import React from 'react'
import theme from './theme'

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
  style,
  ...props
}, { rebass }) => {
  const config = { ...theme, ...rebass }
  const customStyle = rebass ? rebass.Overlay : {}
  const { zIndex, scale, colors, borderRadius } = config

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
      zindex: zIndex[2],
      display: open ? 'flex' : 'none',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      ...customStyle,
      ...style
    },
    dismiss: {
      position: 'fixed',
      top: 0,
      right: 0,
      bottom: 0,
      left: 0,
      backgroundColor: dark ? 'rgba(0, 0, 0, .875)' : 'rgba(255, 255, 255, .875)',
      opacity: .5
    },
    inner: {
      position: 'relative',
      zindex: zIndex[1],
      boxSizing: 'border-box',
      minWidth: 320,
      width: fullWidth ? '100%' : null,
      ...(box ? innerStyle : {})
    }
  }

  return (
    <div
      className='Overlay'
      style={sx.root}>
      <div style={sx.dismiss}
        onClick={onDismiss} />
      <div {...props}
        style={sx.inner}>
        {children}
      </div>
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

Overlay.contextTypes = {
  rebass: React.PropTypes.object
}

export default Overlay

