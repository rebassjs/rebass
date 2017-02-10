
import React from 'react'
import Base from './Base'
import config from './config'

/**
 * Styled tooltip that shows on hover
 */

const Tooltip = ({
  title,
  placement,
  children,
  ...props
}, { rebass }) => {
  const { fontSizes, scale, colors } = { ...config, ...rebass }

  const css = `
    .Tooltip_box { display: none }
    .Tooltip:hover .Tooltip_box { display: block }
  `.replace(/\n/g, '').replace(/\s\s+/g, ' ')

  const getStylesForPlacement = (placement = 'top', scale) => {
    if (placement === 'left') {
      return {
        box: {
          top: 0,
          right: '100%',
          transform: `translate(-${1.375 * scale[1]}px, 0)`
        },
        arrow: {
          top: 0,
          right: 0,
          transform: `translate(${1.375 * scale[1]}px, 60%)`,
          borderLeftColor: colors.black
        }
      }
    } else if (placement === 'right') {
      return {
        box: {
          top: 0,
          left: '100%',
          transform: `translate(${1.375 * scale[1]}px, 0)`
        },
        arrow: {
          top: 0,
          left: 0,
          transform: `translate(-${1.375 * scale[1]}px, 60%)`,
          borderRightColor: colors.black
        }
      }
    } else if (placement === 'bottom') {
      return {
        box: {
          top: '100%',
          left: '50%',
          transform: `translate(-50%, ${scale[1]}px)`
        },
        arrow: {
          bottom: '100%',
          left: '50%',
          transform: 'translate(-50%, 0)',
          borderBottomColor: colors.black
        }
      }
    } else {
      // Top
      return {
        box: {
          bottom: '100%',
          left: '50%',
          transform: `translate(-50%, -${scale[1]}px)`
        },
        arrow: {
          top: '100%',
          left: '50%',
          transform: 'translate(-50%, 0)',
          borderTopColor: colors.black
        }
      }
    }
  }

  const sx = {
    root: {
      position: 'relative',
      display: 'inline-block',
      cursor: 'pointer'
    },
    box: {
      position: 'absolute',
      fontSize: fontSizes[6],
      whiteSpace: 'nowrap',
      paddingTop: scale[1] / 2,
      paddingBottom: scale[1] / 2,
      paddingLeft: scale[1],
      paddingRight: scale[1],
      color: colors.white,
      backgroundColor: colors.black,
      ...getStylesForPlacement(placement, scale).box
    },
    arrow: {
      position: 'absolute',
      border: '6px solid transparent',
      ...getStylesForPlacement(placement, scale).arrow
    }
  }

  return (
    <span
      className='Tooltip'
      aria-label={title}
      style={sx.root}>
      <style dangerouslySetInnerHTML={{ __html: css }} />
      <Base {...props}
        baseStyle={sx.box}
        className='Tooltip Tooltip_box'>
        {title}
        <div className='Tooltip_arrow' style={sx.arrow} />
      </Base>
      {children}
    </span>
  )
}

Tooltip.propTypes = {
  /** Text to display in tooltip */
  title: React.PropTypes.string,
  /** Direction to place the tooltip */
  placement: React.PropTypes.oneOf([
    'top',
    'right',
    'bottom',
    'left'
  ])
}

Tooltip.defaultProps = {
  inverted: true,
  placement: 'top',
  rounded: true
}

Tooltip.contextTypes = {
  rebass: React.PropTypes.object
}

export default Tooltip
