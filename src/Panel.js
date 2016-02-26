
import React from 'react'
import theme from './theme'

/**
 * Panel for containing small pieces of information
 */

const Panel = ({ type, style, ...props }, { rebass }) => {
  const config = { ...theme, ...rebass }
  const panelConfig = { ...theme.Panel, ...rebass.Panel }
  const { scale, borderRadius } = config

  const borderColor = config.colorTypes[type]

  return (
    <div
      {...props}
      className='Panel'
      style={{
        padding: scale[2],
        marginBottom: scale[2],
        borderWidth: 1,
        borderStyle: 'solid',
        borderColor,
        borderRadius,
        ...style
      }}
    />
  )
}

Panel.propTypes = {
  /** Sets border color based on type of panel */
  type: React.PropTypes.oneOf([
    'default',
    'info',
    'success',
    'warning',
    'error'
  ])
}

Panel.defaultProps = {
  type: 'default'
}

Panel.contextTypes = {
  rebass: React.PropTypes.object
}

export default Panel
