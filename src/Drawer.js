
import React from 'react'
import theme from './theme'

const Drawer = ({ open, size, position, style, ...props }, { rebass }) => {
  const config = { ...theme, ...rebass }
  const customStyle = rebass ? rebass.Drawer : {}
  const { scale, zIndex, colors } = config

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

  if (!open) {
    transform = `translateX(-100%)`
  }

  const sx = {
    boxSizing: 'border-box',
    position: 'fixed',
    ...placements[position],
    zIndex: zIndex[4],
    width,
    height,
    padding: scale[2],
    transform,
    transition: 'transform .2s ease-out',
    overflowX: 'hidden',
    overflowY: 'scroll',
    color: colors.white,
    backgroundColor: colors.black,
    ...customStyle,
    ...style
  }

  return (
    <div
      {...props}
      className='Drawer'
      style={sx} />
  )
}

Drawer.propTypes = {
  size: React.PropTypes.number,
  open: React.PropTypes.bool,
  position: React.PropTypes.oneOf([
    'top',
    'right',
    'bottom',
    'left'
  ])
}

Drawer.defaultProps = {
  size: 320,
  position: 'left'
}

Drawer.contextTypes = {
  rebass: React.PropTypes.object
}

export default Drawer

