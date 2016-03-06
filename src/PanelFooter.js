
import React from 'react'
import Base from './Base'
import config from './config'

/**
 * Footer for Panel component with vertical centering using flexbox
 */

const PanelFooter = ({ theme, ...props }, { rebass }) => {
  const { scale, colors, borderRadius, fontSizes } = { ...config, ...rebass }
  const borderColor = colors[theme]

  return (
    <Base
      {...props}
      className='PanelFooter'
      baseStyle={{
        fontSize: fontSizes[6],
        display: 'flex',
        alignItems: 'center',
        marginTop: scale[2],
        marginRight: -scale[2],
        marginBottom: -scale[2],
        marginLeft: -scale[2],
        padding: scale[2],
        borderTopWidth: 1,
        borderTopStyle: 'solid',
        borderColor,
        borderRadius: `0 0 ${borderRadius}px ${borderRadius}px`
      }} />
  )
}

PanelFooter.propTypes = {
  /** Sets color based on theme */
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

PanelFooter.defaultProps = {
  theme: 'default'
}

PanelFooter.contextTypes = {
  rebass: React.PropTypes.object
}

export default PanelFooter

