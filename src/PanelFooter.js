
import React from 'react'
import theme from './theme'

/**
 * Footer for Panel component with vertical centering using flexbox
 */

const PanelFooter = ({ type, style, ...props }, { rebass }) => {
  const config = { ...theme, ...rebass }
  const borderTopColor = config.colorTypes[type]
  const { scale, borderRadius, fontSizes } = config

  return (
    <div
      {...props}
      className='PanelFooter'
      style={{
        fontSize: fontSizes[6],
        display: 'flex',
        alignItems: 'center',
        marginTop: scale[2],
        marginRight: - scale[2],
        marginBottom: - scale[2],
        marginLeft: - scale[2],
        padding: scale[2],
        borderTopWidth: 1,
        borderTopStyle: 'solid',
        borderTopColor,
        borderRadius: `0 0 ${borderRadius}px ${borderRadius}px`,
        ...style
      }} />
  )
}

PanelFooter.propTypes = {
  /** Sets background color based on the type of panel */
  type: React.PropTypes.oneOf([
    'default',
    'info',
    'success',
    'warning',
    'error',
  ])
}

PanelFooter.defaultProps = {
  type: 'default'
}

PanelFooter.contextTypes = {
  rebass: React.PropTypes.object
}

export default PanelFooter

