
import React from 'react'
import Base from './Base'
import theme from './theme'

/**
 * Header for Panel component with vertical centering using flexbox
 */

const PanelHeader = ({ ...props }, { rebass }) => {
  const config = { ...theme, ...rebass }
  const { bold, scale, colors, borderRadius } = config

  return (
    <Base
      {...props}
      className='PanelHeader'
      baseStyle={{
        display: 'flex',
        alignItems: 'center',
        fontWeight: bold,
        marginTop: - scale[2] - 1,
        marginRight: - scale[2] - 1,
        marginLeft: - scale[2] - 1,
        marginBottom: scale[2],
        padding: scale[2],
        borderRadius: `${borderRadius}px ${borderRadius}px 0 0`
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
  type: 'default',
  color: 'white'
}

PanelHeader.contextTypes = {
  rebass: React.PropTypes.object
}

export default PanelHeader

