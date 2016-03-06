
import React from 'react'
import Base from './Base'
import config from './config'

/**
 * Header for Panel component with vertical centering using flexbox
 */

const PanelHeader = ({ ...props }, { rebass }) => {
  const { bold, scale, borderRadius } = { ...config, ...rebass }

  return (
    <Base
      {...props}
      className='PanelHeader'
      inverted
      baseStyle={{
        display: 'flex',
        alignItems: 'center',
        fontWeight: bold,
        marginTop: -scale[2] - 1,
        marginRight: -scale[2] - 1,
        marginLeft: -scale[2] - 1,
        marginBottom: scale[2],
        padding: scale[2],
        borderRadius: `${borderRadius}px ${borderRadius}px 0 0`
      }} />
  )
}

PanelHeader.propTypes = {
  /** Sets color from config */
  theme: React.PropTypes.oneOf([
    'primary',
    'secondary',
    'default',
    'info',
    'success',
    'warning',
    'error'
  ])
}

PanelHeader.defaultProps = {
  theme: 'default',
  inverted: true
}

PanelHeader.contextTypes = {
  rebass: React.PropTypes.object
}

export default PanelHeader

