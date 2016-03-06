
import React from 'react'
import Base from './Base'
import config from './config'

/**
 * An off-canvas drawer component
 */

const Drawer = ({
  open,
  size,
  position,
  onDismiss,
  ...props
}, { rebass }) => {
  const { scale, zIndex } = { ...config, ...rebass }

  const placements = {
    top: {
      top: 0,
      right: 0,
      left: 0
    },
    right: {
      top: 0,
      right: 0,
      bottom: 0
    },
    bottom: {
      right: 0,
      bottom: 0,
      left: 0
    },
    left: {
      top: 0,
      bottom: 0,
      left: 0
    }
  }

  let width, height, transform

  if (position === 'top' || position === 'bottom') {
    height = size
  } else {
    width = size
  }

  const transforms = {
    top: 'translateY(-100%)',
    right: 'translateX(100%)',
    bottom: 'translateY(100%)',
    left: 'translateX(-100%)'
  }

  if (!open) {
    transform = transforms[position]
  }

  const sx = {
    dismiss: {
      position: 'fixed',
      top: 0,
      right: 0,
      bottom: 0,
      left: 0,
      zIndex: zIndex[3],
      display: open ? null : 'none'
    },
    content: {
      position: 'fixed',
      ...placements[position],
      zIndex: zIndex[4],
      width,
      height,
      padding: scale[2],
      transform,
      transition: 'transform .2s ease-out',
      overflowX: 'hidden',
      overflowY: 'scroll'
    }
  }

  return (
    <div className='Drawer'>
      <div style={sx.dismiss}
        onClick={onDismiss} />
      <Base
        {...props}
        className='Drawer Drawer_content'
        baseStyle={sx.content} />
    </div>
  )
}

Drawer.propTypes = {
  /** Width or height of drawer, depending on placement */
  size: React.PropTypes.number,
  /** Shows and hides the drawer */
  open: React.PropTypes.bool,
  /** Position relative to the viewport */
  position: React.PropTypes.oneOf([
    'top',
    'right',
    'bottom',
    'left'
  ]),
  /** Click event callback for the background overlay */
  onDismiss: React.PropTypes.func
}

Drawer.defaultProps = {
  open: false,
  size: 320,
  position: 'left',
  onDismiss: function () {},
  color: 'white',
  backgroundColor: 'default'
}

Drawer.contextTypes = {
  rebass: React.PropTypes.object
}

export default Drawer

