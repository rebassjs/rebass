
import React from 'react'
import Base from './Base'
import config from './config'

/**
 * Styled tooltip that shows on hover
 */

const Tooltip = ({
  title,
  children,
  ...props
}, { rebass }) => {
  const { fontSizes, scale, colors } = { ...config, ...rebass }

  const css = `
    .Tooltip_box { display: none }
    .Tooltip:hover .Tooltip_box { display: block }
  `.replace(/\n/g, '').replace(/\s\s+/g, ' ')

  const sx = {
    root: {
      position: 'relative',
      display: 'inline-block',
      cursor: 'pointer'
    },
    box: {
      position: 'absolute',
      bottom: '100%',
      left: '50%',
      fontSize: fontSizes[6],
      whiteSpace: 'nowrap',
      paddingTop: scale[1] / 2,
      paddingBottom: scale[1] / 2,
      paddingLeft: scale[1],
      paddingRight: scale[1],
      color: colors.white,
      backgroundColor: colors.black,
      transform: 'translate(-50%, -8px)'
    },
    arrow: {
      position: 'absolute',
      top: '100%',
      left: '50%',
      border: '6px solid transparent',
      borderTopColor: colors.black,
      transform: 'translate(-50%, 0)'
    }
  }

  return (
    <span
      className='Tooltip'
      title={title}
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
  title: React.PropTypes.string
}

Tooltip.defaultProps = {
  inverted: true,
  rounded: true
}

Tooltip.contextTypes = {
  rebass: React.PropTypes.object
}

export default Tooltip
