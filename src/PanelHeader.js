
import React from 'react'
import theme from './theme'

/**
 * Header for Panel component with vertical centering using flexbox
 */

const PanelHeader = ({ type, style, ...props }, { rebass }) => {
  const config = { ...theme, ...rebass }
  const customStyle = rebass ? rebass.PanelHeader : {}
  const { scale, colors, borderRadius } = config
  const backgroundColor = colors[type]

  return (
    <div
      {...props}
      className='PanelHeader'
      style={{
        display: 'flex',
        alignItems: 'center',
        fontWeight: 'bold',
        marginTop: - scale[2],
        marginRight: - scale[2],
        marginLeft: - scale[2],
        marginBottom: scale[2],
        padding: scale[2],
        color: colors.white,
        backgroundColor,
        borderRadius: `${borderRadius}px ${borderRadius}px 0 0`,
        ...customStyle,
        ...style
      }} />
  )
}

PanelHeader.propTypes = {
  /** Sets background color based on the type of panel */
  type: React.PropTypes.oneOf([
    'default',
    'info',
    'success',
    'warning',
    'error',
  ])
}

PanelHeader.defaultProps = {
  type: 'default'
}

PanelHeader.contextTypes = {
  rebass: React.PropTypes.object
}

export default PanelHeader

