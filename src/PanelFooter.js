
import React from 'react'
import Base from './Base'
import theme from './theme'

/**
 * Footer for Panel component with vertical centering using flexbox
 */

const PanelFooter = ({ type, ...props }, { rebass }) => {
  const config = { ...theme, ...rebass }
  const { scale, colors, borderRadius, fontSizes } = config
  const borderColor = colors[type]

  return (
    <Base
      {...props}
      className='PanelFooter'
      baseStyle={{
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
        borderColor,
        borderRadius: `0 0 ${borderRadius}px ${borderRadius}px`
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

